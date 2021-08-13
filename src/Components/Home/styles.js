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
    backgroundColor: "#E7EFFE",
    borderRadius: "0 40px 40px 0",
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
      height: 40,
      width: 40,
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
      backgroundColor: "#E7EFFE",
      padding: 0,
      cursor: "pointer",
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translate(-40%,25%)",
      border: "none",
      "& svg": {
        cursor: "pointer",
        backgroundColor: "#E7EFFE",
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
    backgroundColor: "#E7EFFE",
  },

  options1: {
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
    position: "absolute",
    bottom: 0,
    fontFamily: "Lato, sans-serif",
    fontSize: 16,
    display: "flex",
    justifyContent: "space-evenly",

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
}));

export default useStyles;
