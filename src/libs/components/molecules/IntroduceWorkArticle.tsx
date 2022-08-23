import React, { ReactNode, VFC } from "react"
import { Box, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"

interface Props {
  title: string
  subTitle?: string
  imageSrc: string
  children: ReactNode
}

const IntroduceWorkArticle: VFC<Props> = ({
  children,
  title,
  imageSrc,
  subTitle,
}) => {
  const StyledTypography = styled(Typography)`
    text-align: left;
  `

  const CoverImage = () => {
    return <img src={imageSrc} alt={title} style={{ maxWidth: "100%" }} />
  }

  return (
    <Grid>
      <Grid container direction={"column"} alignItems={"center"}>
        <CoverImage />
      </Grid>
      <Box display="flex">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          alignItems="center"
          alignSelf="center"
          flexDirection="column"
          justifyContent="center"
          p={4}
        >
          <Grid item xs={12} sm={6} md={6}>
            <StyledTypography variant="subtitle1">{title}</StyledTypography>
            {subTitle && (
              <StyledTypography variant="h1">{subTitle}</StyledTypography>
            )}
            {children}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default IntroduceWorkArticle
