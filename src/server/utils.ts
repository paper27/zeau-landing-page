import { type NextApiResponse } from "next";
import { LRUCache } from "lru-cache";

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};
export const rateLimit = (options?: Options) => {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = (currentUsage ?? 0) > limit; // >=
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - (currentUsage ?? 0)
        );

        return isRateLimited ? reject() : resolve();
      }),
  };
}; // ref: https://github.com/vercel/next.js/tree/canary/examples/api-routes-rate-limit

export const getFormattedGCPPrivateKey = (key: string) => {
  return key.replace(/\n/g, "\n"); // ref: https://stackoverflow.com/a/41044630
};
