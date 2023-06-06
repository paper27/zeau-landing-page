import { type NextPage } from "next";
import Head from "next/head";
import Image, { type StaticImageData } from "next/image";

import useScreenSize from "~/hooks/useScreenSize";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import zeausm from "~/assets/zeau-sm-crop.png";
import img2 from "~/assets/img2.jpg";
import img3 from "~/assets/img3.jpg";
import img4 from "~/assets/img4.jpg";

import { PRIMARY_COLOR } from "~/contexts/Theme";

// const iconSun = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     // class="lucide lucide-sun"
//   >
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// );

// const iconMoon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     // class="lucide lucide-moon"
//   >
//     <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//   </svg>
// );

const HEIGHT_BLOCK = 250;
const WIDTH_CONTENT = 600;
const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 250;

const Home: NextPage = () => {
  const { isBelowSlim } = useScreenSize();

  const content1 = (
    <ContentDetails>
      <Stack spacing={1}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Earn every second
        </Typography>
        <Typography>
          With money flowing every second of your livestream, you can start
          earning money immediately. No more waiting for sponsorship deals or
          relying on ad revenue.
        </Typography>
      </Stack>
    </ContentDetails>
  );

  //   const content2 = (
  //     <ContentDetails>
  //       <Stack spacing={1}>
  //         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
  //           Powered by Web 3.0
  //         </Typography>
  //         <Typography></Typography>
  //       </Stack>
  //     </ContentDetails>
  //   );

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(#1D4350 0%, #A43931 100%)", // ref: https://uigradients.com/
      }}
    >
      <Head>
        <title>zeau space</title>
        <meta name="description" content="Web3 Livestreaming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{ width: "100%", maxWidth: 1100, pt: 10 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Image alt="" src={zeausm} priority />
          {/* <IconButton onClick={toggleColorScheme}>
            {isDark ? iconMoon : iconSun}
          </IconButton> */}
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={20}
          sx={{ width: "100%" }}
        >
          <Block>
            <>
              <ContentDetails>
                <Stack spacing={1}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Make money while you livestream
                  </Typography>
                  <Typography>
                    Our innovative payment structure ensures that every second
                    counts.
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      // eslint-disable-next-line
                      onClick={() => {
                        window.open(
                          "https://twitter.com/zeauspace?ref_src=twsrc%5Etfw",
                          "_blank",
                          "noopener"
                        );
                      }}
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Stay informed
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        window.open(
                          "https://app.zeau.space/",
                          "_blank",
                          "noopener"
                        );
                      }}
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Try our demo
                    </Button>
                  </Stack>
                </Stack>
              </ContentDetails>
              <StockImage src={img2} />
            </>
          </Block>

          {isBelowSlim ? (
            <Block>
              <>
                {content1}
                <StockImage src={img3} />
              </>
            </Block>
          ) : (
            <Block>
              <>
                <StockImage src={img3} />
                {content1}
              </>
            </Block>
          )}

          <Block>
            <>
              <ContentDetails>
                <Stack spacing={1}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Viewers save more
                  </Typography>
                  <Typography>
                    Viewers pay less overall while still supporting their
                    favorite livestreamers.
                  </Typography>
                </Stack>
              </ContentDetails>
              <StockImage src={img4} />
            </>
          </Block>

          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Powered by Web 3.0
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ width: isBelowSlim ? "100%" : "50%", pt: 2 }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  window.open(
                    "https://twitter.com/zeauspace?ref_src=twsrc%5Etfw",
                    "_blank",
                    "noopener"
                  );
                }}
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Stay informed
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  window.open("https://app.zeau.space/", "_blank", "noopener");
                }}
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Try our demo
              </Button>
            </Stack>
          </Stack>

          <Box sx={{ p: 15 }}></Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;

const ContentDetails = ({ children }: { children: JSX.Element }) => {
  return <Stack sx={{ maxWidth: WIDTH_CONTENT }}>{children}</Stack>;
};

const StockImage = ({ src }: { src: StaticImageData }) => {
  const { isBelowSlim } = useScreenSize();

  return (
    <Image
      alt=""
      src={src}
      priority
      style={{
        objectFit: "cover",
        width: isBelowSlim ? "100%" : IMAGE_WIDTH,
        height: isBelowSlim ? "auto" : IMAGE_HEIGHT,
        borderRadius: isBelowSlim ? undefined : 20,
      }}
    />
  );
};

const Block = ({ children }: { children: JSX.Element }) => {
  const { isBelowSlim } = useScreenSize();

  return (
    <Stack
      direction={isBelowSlim ? "column" : "row"}
      alignItems="center"
      justifyContent={isBelowSlim ? undefined : "space-between"}
      spacing={2}
      sx={{ width: "100%" }}
    >
      {children}
    </Stack>
  );
};
