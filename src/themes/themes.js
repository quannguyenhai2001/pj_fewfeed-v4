export const themeMainOptions = {
    typography: {
        fontFamily: [
            "monumentGrotesk",
            // "Poppins",
            // "Raleway",
            // "Open Sans",
            "sans-serif",
        ].join(","),
    },
    palette: {
        primary: {
            main: "#53575A",
            light: "#00d6af",
            dark: "#F0F0F0",
            contrastText: "#fff",
        },
        secondary: {
            main: "#f6bc2b",
            light: "#ff7961",
            dark: "#ff8831",
            contrastText: "#fff",
        },
        signature: {
            main: "#fff000b0",
            dark: "#fff000",
            light: "#fffbc0",
        },
        error: {
            main: "#e70000",
            dark: "#ff5656",
        },
        info: {
            main: "#03a9f4",
            light: "#42a5f5",
            dark: "#11cdef",
            contrastText: "#fff",
        },
        warning: {
            main: "#f8cb0d",
        },
        success: {
            main: "#2dce89",
            dark: "#1f905f",
        },
        text: {
            main: "#53575A",
            dark: "#000000",
            light: "#ffffff",
            success: "#2dce89",
        },
        background: {
            default: "#fff",
            main: "#F0F0F0",
            dark: "#00000070",
        },
        purple: {
            main: "#b23aee",
            dark: "#68228B",
        },
        gray: {
            main: "#808080",
            dark: "#888888",
        },
    },
    spacing: value => value * 1,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: 12,
                    padding: "7px 0",
                    borderRadius: "7px",
                    background: "#D1D8EC",
                    backgroundColor: "#ebecf0",
                    color: "#61677c",
                    boxShadow: "1.5px 1.5px 2.5px #babecc, -2px -2px 5px #fff",
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    fontSize: 20,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    backgroundColor: "lightGrey",
                    transition: "0.3s ease",
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 34,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                    color: "#e70000",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: "inherit",
                },
            },
        },
    },
};