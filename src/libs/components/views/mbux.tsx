import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import MBUX from "assets/images/MBUX.jpg"
import FTS from "assets/images/MBUX_FTS.png"
import SOFTWARE_KEYBOARD from "assets/images/MBUX_Flick.png"
import { Box } from "@mui/system"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import Iframe from "react-iframe"

function Mbux(): React.ReactElement {
  const { t } = useTranslation()
  const StyledParagraph = styled(Typography)`
    margin: 16px 0;
  `
  const YoutubeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  `
  const StyledIframe = styled(Iframe)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
  const articleImage = (imageSrc: string, alt: string) => {
    return <img src={imageSrc} alt={alt} style={{ maxWidth: "100%" }} />
  }
  return (
    <IntroduceWorkArticle
      title="MBUX - Mercedes-Benz User Experience"
      subTitle={t("short_description_MBUX_01")}
      imageSrc={MBUX}
    >
      <Box mt={4}>
        <Typography variant="h3">{t("Role")}</Typography>
      </Box>
      <StyledParagraph variant="body1">{t("UI/UX Expert")}</StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Tools")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Sketch.app, Confluence, Jira
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Skills")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("UI Design")} ({t("Information Architecture")}), {t("User Research")}{" "}
        ,{t("Usability Research")},{" "}
        {t("International Communications and Negotiations")},{" "}
        {t("Business English")}
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Challenges")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("mbux_article_paragraph_01")}
      </StyledParagraph>
      <StyledParagraph variant="body1">
        {t("mbux_article_paragraph_02")}{" "}
      </StyledParagraph>
      {articleImage(FTS, "MBUS Free Text Search for Japanease Market")}
      <StyledParagraph variant="body1">
        {t("mbux_article_paragraph_03")}
      </StyledParagraph>
      <StyledParagraph variant="body1">
        {t("mbux_article_paragraph_04")}
      </StyledParagraph>
      {articleImage(SOFTWARE_KEYBOARD, "Flick input of Japanese language")}
      <StyledParagraph variant="body1">
        {t("mbux_article_paragraph_05")}
      </StyledParagraph>
      {/* <YoutubeContainer>
        <StyledIframe
          src="https://www.youtube.com/embed/NRtTMp1cjOo?start=590"
          url="https://www.youtube.com/embed/NRtTMp1cjOo?start=590"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></StyledIframe>
      </YoutubeContainer> */}
    </IntroduceWorkArticle>
  )
}

export default Mbux
