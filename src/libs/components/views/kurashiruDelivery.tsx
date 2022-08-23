import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import kurashiruDelivery from "assets/images/kurashiru_delivery_cover.jpeg"
import { Box } from "@mui/system"
import shopperApp from "../../../assets/images/shopper_app_map.gif"
import adminApp from "../../../assets/images/admin_app.gif"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

function KurashiruDelivery(): React.ReactElement {
  const { t } = useTranslation()
  const articleImage = (
    imageSrc: string,
    alt: string,
    style?: React.CSSProperties
  ) => {
    return (
      <img src={imageSrc} alt={alt} style={{ maxWidth: "100%", ...style }} />
    )
  }
  const StyledParagraph = styled(Typography)`
    margin: 16px 0;
  `
  return (
    <IntroduceWorkArticle
      title="Kurashiru Delivery (2021)"
      subTitle={t(
        "Get delivered from your favorite local supermarket within 30 minuts"
      )}
      imageSrc={kurashiruDelivery}
    >
      <StyledParagraph variant="body1">
        {t("short_descripton_kurashiru_delivery_01")}
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Role")}</Typography>
      </Box>
      <StyledParagraph variant="body1">{t("UI/UX Designer")}</StyledParagraph>
      <StyledParagraph variant="body1">
        {t("Front-end engineer")}
      </StyledParagraph>
      <StyledParagraph variant="body1">{t("Project manager")}</StyledParagraph>
      <StyledParagraph variant="body1">{t("Scrum master")}</StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Tools")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Figma, Visual Studio Code, SourceTree, Xcode
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Skills")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("UI/UX Design")}, {t("Graphic Design")}, {t("Front-end engineering")}{" "}
        (React, Swift), Git (GitHub)
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">{t("Challenges")}</Typography>
      </Box>
      <StyledParagraph variant="body1">
        {t("kurashiru_delivery_article_paragraph_01")}
      </StyledParagraph>
      {articleImage(
        shopperApp,
        "Map view and transitions of a delivery operation app"
      )}
      <StyledParagraph variant="body1">
        {t("kurashiru_delivery_article_paragraph_02")}
      </StyledParagraph>
      <StyledParagraph variant="body1">
        {t("kurashiru_delivery_article_paragraph_03")}
      </StyledParagraph>
      {articleImage(
        adminApp,
        "Admin of the EC site is operating the web based management tool"
      )}
    </IntroduceWorkArticle>
  )
}

export default KurashiruDelivery
