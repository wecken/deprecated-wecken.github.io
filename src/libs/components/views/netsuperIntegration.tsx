import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import netsuper from "assets/images/kurashiru_net-super_integration.png"
import { Box } from "@mui/system"
import categoryBrowsingImage from "../../../assets/images/netsuper_image_01.png"
import ingredientPurchaseImage from "../../../assets/images/buy_ingredients.gif"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

function NetsuperIntegration(): React.ReactElement {
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
      title="Kurashiru Netsuper Integration (2021)"
      subTitle={t(
        "Integrated one of the biggest online grocery store by AEON into Kurashiru, recipe video app, and designed the user experience completely from scratch"
      )}
      imageSrc={netsuper}
    >
      <StyledParagraph variant="body1">
        {t("short_descripton_netsuper_01")}
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
        {t("netsuper_article_paragraph_01")}
      </StyledParagraph>
      {articleImage(
        categoryBrowsingImage,
        "UI of E-commerce app showing navigation of browsing by categories"
      )}
      <StyledParagraph variant="body1">
        {t("netsuper_article_paragraph_02")}
      </StyledParagraph>
      <StyledParagraph variant="body1">
        {t("netsuper_article_paragraph_03")}
      </StyledParagraph>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        display="flex"
      >
        {articleImage(
          ingredientPurchaseImage,
          "Purchasing ingredients from selected recipe.",
          { width: 280, alignSelf: "center" }
        )}
      </Box>
      <StyledParagraph variant="body1">
        {t("netsuper_article_paragraph_04")}
      </StyledParagraph>
      <StyledParagraph variant="body1">
        {t("netsuper_article_paragraph_05")}
      </StyledParagraph>
    </IntroduceWorkArticle>
  )
}

export default NetsuperIntegration
