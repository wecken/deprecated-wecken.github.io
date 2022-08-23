import React from "react"
import MBUX from "assets/images/MBUX.jpg"
import EOW from "assets/images/EOW_Animation.gif"
import kurashiruStore from "assets/images/kurashiru_store_banner.jpg"
import netsuper from "assets/images/kurashiru_net-super_integration.png"
import kurashiruDelivery from "assets/images/kurashiru_delivery_cover.jpeg"
import { Box, Grid, Typography } from "@mui/material"
import MediaCard from "libs/components/molecules/MediaCard"
import { useTranslation } from "react-i18next"

function Main(): React.ReactElement {
  const { t } = useTranslation()
  return (
    <Box m={2}>
      <Grid container alignItems="center" direction="column">
        <Box mb={2} style={{ width: "100%" }}>
          <Typography variant="h2">{t("Wecken's Works")}</Typography>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          alignItems="flex-start"
          gap={3}
        >
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={kurashiruDelivery}
              subtitle="2021"
              title="Kurashiru Delivery"
              body={t(
                "Get delivered from your favorite local supermarket within 30 minuts"
              )}
              to="/works/kurashiru_delivery"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={netsuper}
              subtitle="2020"
              title="'Netsuper' Integration on Kurashiru App"
              body={t(
                "Integrated one of the biggest online grocery store by AEON into Kurashiru, recipe video app, and designed the user experience completely from scratch"
              )}
              to="/works/netsuper_integration"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={kurashiruStore}
              subtitle="2020"
              title="kurashiru store"
              body={t("card_description_kurashiru_store_01")}
              to="/works/kurashiru_store"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={MBUX}
              subtitle="2019"
              title="MBUX - Mercedes-Benz User Experience"
              body={t("card_description_MBUX_01")}
              to="/works/mbux"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={EOW}
              title={t("Eijiro on the WEB")}
              subtitle="2016"
              // body="One of the most popular Japanese-English online dictionary in Japan."
              body={t("card_description_EOW_01")}
              to="/works/EOW"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
