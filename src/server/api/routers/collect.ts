import { z } from "zod";
import { rateLimit, getFormattedGCPPrivateKey } from "../../utils";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { createTRPCRouter, publicProcedure } from "../trpc";

import { env } from "~/env.mjs";

const MAX_REQUESTS_PER_INTERVAL = 3; // interval input value for rateLimit fn
const limiter = rateLimit({
  interval: 1_000 * 30, //60 * 5, // milliseconds * seconds * minutes
  uniqueTokenPerInterval: 1_000, // max users per second
});

export const collectRouter = createTRPCRouter({
  recordInterest: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await limiter.check(ctx.res, MAX_REQUESTS_PER_INTERVAL, "CACHE_TOKEN");
      } catch (error) {
        return { isSuccess: false, reason: "rate limited" };
      }

      try {
        // NOTE: to use google sheets API, enable it in GCP and share permission to GCP service email (GCP_CLIENT_EMAIL)
        // ref: https://www.youtube.com/watch?v=7N0OcQZFm3Q
        // ref: https://www.npmjs.com/package/google-spreadsheet
        const sheetId = "1bEpkbUYFCaUG7XG57yT2bbRDwkkYSNTOGZNhR724A_o";
        const doc = new GoogleSpreadsheet(sheetId);

        const firebase_private_key_b64 = Buffer.from(
          env.GCP_PRIVATE_KEY,
          "base64"
        );
        const firebase_private_key = firebase_private_key_b64.toString("utf8");

        await doc.useServiceAccountAuth({
          // env var values are copied from service account credentials generated by google
          // see "Authentication" section in docs for more info
          client_email: env.GCP_CLIENT_EMAIL,
          private_key: firebase_private_key, //getFormattedGCPPrivateKey(env.GCP_PRIVATE_KEY),
        });

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
        await sheet?.addRow({
          name: input.name,
          email: input.email,
        });

        return { isSuccess: true };
      } catch (error) {
        return { isSuccess: false, reason: "submit error" };
      }
    }),
});
