import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    color: theme.palette.primary.main,
    position: "fixed",
    top: 7,
    left: 7,
    bottom: 0,
    width: 260,
    maxWidth: 300,
    minWidth: 180,
    height: "98vh",
    overflow: "auto",
    border: "1px solid #7768f28a",
    backgroundColor: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.15 )",
    backdropFilter: "blur( 8.5px )",
    borderRadius: 20,
    "-webkit-backdrop-filter": "blur( 8.5px )",

    "@media (max-width:1220px)": {
      width: "230px",
    },
  },

  burger: {
    display: "none",
  },

  container: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  nav: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 30,

    "& span": {
      marginRight: "auto",
      marginLeft: 4,
    },

    "& svg": {
      margin: "0 4px",
      height: 40,
      width: 40,
      cursor: "pointer",
    },
  },

  navIcons: {
    marginRight: 10,
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
  },

  navSearchBarDiv: {
    padding: "35px 0",
    display: "flex",
    justifyContent: "center",
  },

  navSearchBarForm: {
    position: "relative",
    width: 210,
    height: 40,
    borderRadius: 40,
    border: "1px solid #7768F2",

    "& button": {
      backgroundColor: "rgba( 255, 255, 255, 0.25 )",
      padding: 0,
      cursor: "pointer",
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translate(-40%,25%)",
      border: "none",
      "& svg": {
        cursor: "pointer",
        backgroundColor: "rgba( 255, 255, 255, 0.25 )",
      },
    },
  },

  navSearchBar: {
    width: "75%",
    fontFamily: "Gilroy-Medium, sans-serif",
    position: "absolute",
    top: "50%",
    left: "45%",
    transform: "translate(-50%,-50%)",
    outline: "none",
    border: "none",
    backgroundColor: "rgba( 255, 255, 255, 0.25 )",
  },

  options1: {
    "& ul": {
      paddingLeft: 0,
      listStyle: "none",

      "& li": {
        borderRadius: 10,
        marginLeft: 25,
        marginBottom: 30,
        display: "flex",
        alignItems: "center",
        fontFamily: "Lato, sans-serif",
        cursor: "pointer",
        fontSize: 16,
        lineHeight: 3.5,
        width: "80%",

        "& span": {
          marginLeft: 12,
        },

        "& svg": {
          overflow: "visible",
          marginLeft: 20,
          width: 27,
          height: 27,
        },
      },
    },
  },

  options2: {
    paddingTop: 40,
    "& ul": {
      paddingLeft: 0,
      listStyle: "none",

      "& li": {
        borderRadius: 5,
        marginLeft: 25,
        marginBottom: 30,
        display: "flex",
        alignItems: "center",
        fontFamily: "Lato, sans-serif",
        cursor: "pointer",
        fontSize: 16,
        lineHeight: 3.5,
        width: "80%",

        "& span": {
          marginLeft: 12,
        },

        "& svg": {
          overflow: "visible",
          marginLeft: 20,
          width: 27,
          height: 27,
        },
      },
    },
  },

  footerOptions: {
    width: "100%",
    fontFamily: "Lato, sans-serif",
    fontSize: 16,
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "30%",

    "& div": {
      cursor: "pointer",
      marginBottom: 50,
      display: "flex",
      justifyContent: "center",

      "& span": {
        textAlign: "center",
        marginLeft: 5,
        display: "flex",
        alignItems: "center",
      },
    },
  },

  logout: {
    color: "#FF6B6B",
  },

  "@media (max-width: 960px)": {
    sidebar: {
      color: theme.palette.primary.main,
      position: "fixed",
      maxWidth: 300,
      minWidth: 180,
      overflow: "auto",
      border: "1px solid #7768f28a",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.15 )",
      backdropFilter: "blur( 8.5px )",
      backgroundColor: "rgba( 255, 255, 255 )",
      height: "100vh",
      top: 0,
      left: 0,
      bottom: 0,
      borderRadius: 0,
      transform: "translateX(-200%)",
      transition: `transform 0.5s ${theme.transitions.easing.easeInOut}`,
      zIndex: 2,
    },

    sidebarActive: {
      color: theme.palette.primary.main,
      position: "fixed",
      maxWidth: 300,
      minWidth: 180,
      overflow: "auto",
      border: "1px solid #7768f28a",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.15 )",
      backdropFilter: "blur( 8.5px )",
      backgroundColor: "rgba( 255, 255, 255 )",
      height: "100vh",
      top: 0,
      left: 0,
      bottom: 0,
      borderRadius: 0,
      width: 260,
      transition: `all 0.5s ${theme.transitions.easing.easeInOut}`,
      animation: `$sidebarIn 0.5s ${theme.transitions.easing.easeInOut}`,
      zIndex: 2,
    },

    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 auto",
      marginBottom: 60,

      "& >:nth-child(2)": {
        fontSize: 20,
        padding: 5,
        marginTop: 20,
      },
    },

    burger: {
      cursor: "pointer",
      marginRight: "auto",
      marginLeft: 20,
      height: 15,
      position: "relative",
      display: "block",
    },

    headerButton: {
      padding: "10px 20px",
      marginTop: 10,
    },

    "@keyframes sidebarIn": {
      "0%": {
        opacity: 0,
        transform: "translateX(-200%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
}));

export default useStyles;
