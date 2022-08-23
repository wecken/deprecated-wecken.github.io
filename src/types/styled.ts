import "@emotion/styled"
import { Theme as MUTheme } from "@mui/material/styles"

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MUTheme {
    palette: {
      wecken: {
        primary: {
          solid: string
        }
        black: {
          high: string
          medium: string
          20: string
          10: string
        }
        white: {
          high: string
        }
      }
    }
  }
}
