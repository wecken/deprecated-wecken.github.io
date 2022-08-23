// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from "@mui/material/styles/createPalette"

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
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
  interface Palette {
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
