import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import KurashiruStoreImage from "assets/images/kurashiru_store_ui.png"
import { Box } from "@mui/system"
import creative from "../../../assets/images/kurashiru_store_creative.png"
import flow from "../../../assets/images/kurashiru_store_flow.png"
import spec from "../../../assets/images/kurashiru_store_spec.png"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

function KurashiruStore(): React.ReactElement {
  const { t } = useTranslation()
  const articleImage = (imageSrc: string, alt: string) => {
    return <img src={imageSrc} alt={alt} style={{ maxWidth: "100%" }} />
  }
  const StyledParagraph = styled(Typography)`
    margin: 16px 0;
  `
  return (
    <IntroduceWorkArticle
      title="kurashiru store (2020)"
      subTitle={t("short_descripton_kurashiru_store_01")}
      imageSrc={KurashiruStoreImage}
    >
      <StyledParagraph variant="body1">
        {t("short_descripton_kurashiru_store_02")}
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Role")}</Typography>
      </Box>
      <StyledParagraph variant="body1">{t("UI/UX Designer")}</StyledParagraph>
      <StyledParagraph variant="body1">
        {t("Front-end engineer")}
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Tools")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Figma, Visual Studio Code, SourceTree
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Skills")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("UI/UX Design")}, {t("Graphic Design")}, {t("Front-end engineering")}{" "}
        (ERB, vue.js, HTML/CSS), Git (GitHub)
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Challenges")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("kurashiru_store_article_paragraph_01")}
      </StyledParagraph>
      <StyledParagraph variant="body1">
        {t("kurashiru_store_article_paragraph_02")}
      </StyledParagraph>
      {articleImage(
        creative,
        "Example of my creative works (static landing page)"
      )}
      <Box my={4}>
        <Typography variant="h3">{t("Design")}</Typography>
      </Box>
      {articleImage(
        spec,
        "part of the design specification of kurashiru store"
      )}
      <StyledParagraph variant="body1">
        {t("kurashiru_store_article_paragraph_03")}
      </StyledParagraph>
      {articleImage(flow, "Sign up flow.")}
      <StyledParagraph variant="body1">
        {t("kurashiru_store_article_paragraph_04")}
      </StyledParagraph>
    </IntroduceWorkArticle>
  )
}

export default KurashiruStore
