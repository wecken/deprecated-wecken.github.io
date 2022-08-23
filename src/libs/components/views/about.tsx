import React from "react"
import kyoto from "assets/images/shorenin.jpg"
import { Box, ButtonBase, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import styled from "@emotion/styled"
import MediaCard from "../molecules/MediaCard"
import kurashiruStore from "assets/images/kurashiru_store_banner.jpg"

function About(): React.ReactElement {
  const { t } = useTranslation()

  const CoverImage = () => {
    return <img src={kyoto} alt={"Kyoto"} style={{ maxWidth: "100%" }} />
  }

  const SNSButton = (color: string, title: string, url: string) => {
    const StyledButton = styled(ButtonBase)`
      padding: 16;
      width: 100%;
      background-color: ${color};
      border-radius: 40px;
      margin: 8px 0;
      min-height: 44px;
      text-transform: none;
    `
    const StyledTypography = styled(Typography)`
      color: #fff;
      text-transform: none;
    `
    return (
      <StyledButton onClick={() => window.open(url)}>
        <StyledTypography variant="button">{title}</StyledTypography>
      </StyledButton>
    )
  }

  const StyledCoverContainer = styled.div`
    position: relative;
  `

  const StyledCoverText = styled(Typography)`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.wecken.white.high};
  `

  return (
    <Grid
      container
      // direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <StyledCoverContainer>
          <CoverImage />
          <StyledCoverText variant="h1">{t("About Wecken")}</StyledCoverText>
        </StyledCoverContainer>
      </Grid>
      <Grid padding={2} item alignSelf={"center"} xs={12} md={6}>
        <Box mb={4}>
          <Typography variant="body1">
            {t(
              "Wecken is a Japan-based UI/UX designer, good at mobile app UI design with a good understanding of front end engineering. This web site is designed and coded by Wecken"
            )}
          </Typography>
        </Box>

        <Box mb={4} style={{ width: "100%" }}>
          <MediaCard
            title={t("Works")}
            body={t("Here are my previous works")}
            imageSrc={kurashiruStore}
            to={"/works"}
          />
        </Box>

        <Box mb={4} style={{ width: "100%" }}>
          <Box mb={1}>
            <Typography variant="h2">{t("Blogs")}</Typography>
            <Typography variant="body1">
              {t("I'm writing about UI design and front-end engineering")}
            </Typography>
          </Box>
          {SNSButton("rgb(44, 182, 150)", "Note", "https://note.com/wecken")}
          {SNSButton("#1DA1F2", "Zenn", "https://zenn.dev/wecken")}
        </Box>
        <Box mb={4}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h2">{t("Contacts")}</Typography>
              <Typography variant="body1">
                {t(
                  "Wecken is currently working for a company that is offering consumer mobile app, and is also working on several UI design projects on the side project."
                )}
                {t(
                  "Please contact me if you need help with the following types of design work."
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                {t("- Consulting UI design (for consumer and for business)")}
              </Typography>
              <Typography variant="subtitle2">
                {t("- UI design mock-up creation using Figma")}
              </Typography>
              <Typography variant="subtitle2">
                {t("- Consulting / Designing usability research")}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  "- Consulting UI Design workshop, and holding online seminars"
                )}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  "- Interpreting / Translating business English, especially IT domain"
                )}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {SNSButton(
                "#3ea8ff",
                "Twitter",
                "https://twitter.com/hiro_yuki_"
              )}
              {SNSButton(
                "#0077B5",
                "LinkedIn",
                "https://www.linkedin.com/in/hiroyuki-miura-836b4032/"
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default About
