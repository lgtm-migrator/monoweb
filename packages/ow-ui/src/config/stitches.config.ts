import { utils } from "./utils"
import * as Stitches from "@stitches/react"

export const { styled, getCssText, css, globalCss, keyframes, prefix, reset, theme, config } = Stitches.createStitches({
  theme: {
    colors: {
      blue0: "#091C34",
      blue1: "#0D2546",
      blue2: "#11325E",
      blue3: "#153E75",
      blue4: "#2C5183",
      blue5: "#446591",
      blue6: "#5B789E",
      blue7: "#738BAC",
      blue8: "#8A9FBA",
      blue9: "#A1B2C8",
      blue10: "#B9C5D6",
      blue11: "#D0D8E3",
      blue12: "#E8ECF1",
      bluebg: "#EBF3FE",
      orange0: "#B88D00",
      orange1: "#CF9E00",
      orange2: "#EDB500",
      orange3: "#FFC300",
      orange4: "#FFC91A",
      orange5: "#FFCF33",
      orange6: "#FFD54D",
      orange7: "#FFDB66",
      orange8: "#FFE07F",
      orange9: "#FFE799",
      orange10: "#FFEDB3",
      orange11: "#FFF3CC",
      orange12: "#FFF9E6",
      red0: "#A30010",
      red1: "#EE0018",
      red2: "#FF1129",
      red3: "#F43145",
      red4: "#F64658",
      red5: "#F65A6A",
      red6: "#F86F7D",
      red7: "#F8838F",
      red8: "#F997A1",
      red9: "#FBADB5",
      red10: "#FCC2C8",
      red11: "#FDD6DA",
      red12: "#FEEBED",
      green0: "#226D4E",
      green1: "#29865F",
      green2: "#309F70",
      green3: "#36B37E",
      green4: "#4ABB8B",
      green5: "#5EC298",
      green6: "#72CAA5",
      green7: "#86D1B2",
      green8: "#9BD9BF",
      green9: "#AFE1CB",
      green10: "#C3E8D8",
      green11: "#D7F0E5",
      green12: "#EBF7F2",
      gray0: "#22272F",
      gray1: "#2E3440",
      gray2: "#3D4555",
      gray3: "#4C566A",
      gray4: "#5E6779",
      gray5: "#707888",
      gray6: "#828997",
      gray7: "#949AA6",
      gray8: "#A6ABB5",
      gray9: "#B7BBC3",
      gray10: "#C9CCD2",
      gray11: "#DBDDE1",
      gray12: "#EDEEF0",
      info0: "#274F91",
      info1: "#2F61B0",
      info2: "#3876D9",
      info3: "#3A86FF",
      info4: "#4E92FF",
      info5: "#619EFF",
      info6: "#75AAFF",
      info7: "#89B6FF",
      info8: "#9CC3FF",
      info9: "#B0CFFF",
      info10: "#C4DBFF",
      info11: "#D8E7FF",
      info12: "#EBF3FF",
      white: "#fff",
      black: "#000",
    },
    fonts: {
      body: 'Poppins,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      monospace: "Menlo, monospace",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px",
    },
    sizes: {
      sm: "48px",
      md: "768px",
      lg: "1024px",
    },
    transitions: {
      color: "color, background-color, border-color, text-decoration-color, fill, stroke",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    borderWidths: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    shadows: {
      ring0: "0 0 0 2px $colors$info11",
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
    zIndices: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
  },
  media: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  utils: utils,
})

export type CSS = Stitches.CSS<typeof config>
