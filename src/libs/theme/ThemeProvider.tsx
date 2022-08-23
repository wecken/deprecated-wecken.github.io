import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { ThemeProvider as StyledThemeProvider } from "@emotion/react"
import { FC } from "react"
import theme from "./theme"

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  )
}
