import { extendTheme, theme } from "@chakra-ui/react"

const fonts = {
    ...theme.fonts,
    body:"lato",
    heading:"oswald"
}

const overrides = {
    ...theme,
    fonts,
    components: {
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: "none"
                },
                _focus:{
                    boxShadow: "none"
                }
            }
        },
        fontWeights: {
            normal: 300,
            medium: 600,
            bold: 1000
        },
        fontSizes: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
            xl: "20px",
            "2xl": "24px",
            "3xl": "28px",
            "4xl": "36px",
            "5xl": "48px",
            "6xl": "64px",
        }
    }
}

const customTheme = extendTheme(overrides)

export default customTheme
