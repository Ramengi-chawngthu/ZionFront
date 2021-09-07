import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: "25%",
    maxWidth: 1200,

    "@media (max-width:1660px)": {
      width: "60%",
      marginLeft: "30%",
    },

    "@media (max-width:1220px)": {
      marginLeft: "33%",
    },
  },

  navigation: {
    display: "none",
  },

  header: {
    margin: "0 auto",
    height: 120,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& h1": {
      fontSize: 28,
      margin: 0,
      color: "#3F2F6A",
      fontFamily: "Gilroy-SemiBold, Lato",
    },
  },

  headerButton: {
    padding: "0 20px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    height: 45,
    width: 120,
    borderRadius: 40,
    border: 0,
    "& h1": {
      fontSize: 17,
      textTransform: "capitalize",
      fontFamily: "Gilroy-Reg, sans-serif",
      color: "#FFF",
    },
  },

  gridMain: {
    display: "grid",
    textAlign: "center",
    "&>:nth-child(1n + 1)": {
      display: "flex",
      flexDirection: "column",
    },

    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      "&>:nth-child(3n+1)": {
        alignItems: "flex-start",
      },

      "&>:nth-child(3n+2)": {
        alignItems: "center",
      },

      "&>:nth-child(3n)": {
        alignItems: "flex-end",
      },
    },

    [theme.breakpoints.between("sm", "md")]: {
      gridTemplateColumns: "1fr 1fr",
      "&>:nth-child(2n+1)": {
        alignItems: "flex-start",
      },

      "&>:nth-child(2n+2)": {
        alignItems: "flex-end",
      },
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      "&>:nth-child(1n)": {
        alignItems: "center",
      },
    },
  },

  cardItems: {
    textAlign: "center",
  },

  cardImg: {
    height: 250,
    marginTop: 20,
    backgroundColor: "#CCC",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1629814856448-96219027f420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80)",
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: 15,
    maxWidth: 320,
    minWidth: 250,
    width: "90%",

    [theme.breakpoints.up("lg")]: {
      maxWidth: 320,
      minWidth: 250,
      width: "90%",
    },

    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: 320,
      minWidth: 220,
      width: "90%",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: 320,
      minWidth: 240,
      width: "90%",
    },
  },

  cardInfo: {
    height: 60,
    marginTop: 10,
    marginBottom: 70,
    maxWidth: 320,
    minWidth: 250,
    width: "90%",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.up("lg")]: {
      maxWidth: 320,
      minWidth: 250,
      width: "90%",
    },

    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: 320,
      minWidth: 220,
      width: "90%",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: 320,
      minWidth: 240,
      width: "90%",
    },
  },

  cardInfoTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "Gilroy-Reg",
    "& h1": {
      fontSize: 17,
      marginTop: 0,
      marginBottom: 0,
    },
    "& p": {
      fontSize: 15,
      marginTop: 0,
      marginBottom: 0,
    },
  },

  cardInfoBookmark: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      height: 23,
      width: 23,
    },
  },

  "@media screen and (max-width: 960px)": {
    main: {
      margin: "0 auto",
      width: "90%",
    },

    navigation: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: 320,
      minWidth: 240,
      margin: "0 auto",
      marginTop: 30,

      "& h1": {
        marginLeft: 120,
        transform: "translateX(-45%)",
        fontFamily: "Gilroy-Reg, sans-serif",
        fontSize: 28,
      },

      "& svg": {
        cursor: "pointer",
      },
    },

    header: {
      height: 80,
      maxWidth: 320,
      alignItems: "flex-end",

      "& >:nth-child(1)": {
        fontFamily: "Gilroy-Med, sans-serif",
        fontSize: 20,
      },
    },

    headerButton: {
      height: 40,
      width: 40,
      justifyContent: "center",
      "& h1": {
        display: "none",
      },

      "& svg": {
        position: "absolute",
      },
    },

    gridMain: {
      minWidth: 0,
      paddingBottom: 30,
    },
  },
}));

export default useStyles;
