import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    color: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    left: 0,
    width: "20%",
    maxWidth: 260,
    minWidth: 180,
    height: "100vh",
    backgroundColor: "#FFF",
  },

  container: {
    position: "relative",
    height: "100%",
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
      height: 35,
      width: 35,
      cursor: "pointer",
    },
  },

  navIcons: {
    marginRight: 10,
    marginBottom: 2,
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
      padding: 0,
      cursor: "pointer",
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translate(-40%,25%)",
      border: "none",
      backgroundColor: "#FFF",
      "& svg": {
        cursor: "pointer",
        backgroundColor: "#FFF",
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
  },

  options1: {
    "& ul": {
      paddingLeft: 0,
      listStyle: "none",

      "& li": {
        borderRadius: 40,
        marginLeft: 25,
        marginBottom: 30,
        display: "flex",
        alignItems: "center",
        fontFamily: "Gilroy-SemiBold, sans-serif",
        cursor: "pointer",
        fontSize: 14,
        lineHeight: 3.5,
        width: "80%",

        "& span": {
          marginLeft: 20,
        },

        "& svg": {
          overflow: "visible",
          marginLeft: 20,
          width: 20,
          height: 20,
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
        borderRadius: 40,
        marginLeft: 25,
        marginBottom: 30,
        display: "flex",
        alignItems: "center",
        fontFamily: "Gilroy-SemiBold, sans-serif",
        cursor: "pointer",
        fontSize: 14,
        lineHeight: 3.5,
        width: "80%",

        "& span": {
          marginLeft: 20,
        },

        "& svg": {
          overflow: "visible",
          marginLeft: 20,
          width: 20,
          height: 20,
        },
      },
    },
  },

  footerOptions: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    fontFamily: "Gilroy-SemiBold, sans-serif",
    fontSize: 14,
    display: "flex",
    justifyContent: "space-evenly",

    "& div": {
      cursor: "pointer",
      marginBottom: 50,
      display: "flex",
      justifyContent: "center",

      "& span": {
        marginLeft: 12,
      },
    },
  },
}));

export default useStyles;
