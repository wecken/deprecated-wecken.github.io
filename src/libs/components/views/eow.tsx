import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import EOWImage from "assets/images/EOW_Animation.gif"
import { Box } from "@mui/system"
import { useTranslation } from "react-i18next"

function EOW(): React.ReactElement {
  const { t } = useTranslation()
  return (
    <IntroduceWorkArticle
      title={t("Eijiro on the WEB")}
      imageSrc={EOWImage}
      subTitle={t("short_description_EOW_01")}
    >
      <Box mt={4}>
        <Typography variant="h5">{t("Role")}</Typography>
      </Box>
      <Typography variant="body1">{t("UI/UX Design")}</Typography>
      <Box mt={4}>
        <Typography variant="h5">{t("Challenges")}</Typography>
      </Box>
      <Typography variant="body1">{t("eow_article_pargraph_01")}</Typography>
      <Typography variant="body1">{t("eow_article_pargraph_02")}</Typography>
    </IntroduceWorkArticle>
  )
}

export default EOW
