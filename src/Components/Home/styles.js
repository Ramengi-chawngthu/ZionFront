import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: '25%',
    maxWidth: 1200,

    '@media (max-width:1660px)': {
      width: '60%',
      marginLeft: '30%',
    },

    '@media (max-width:1220px)': {
      marginLeft: '33%',
    },
  },

  navigation: {
    display: 'none',
  },

  header: {
    margin: '0 auto',
    height: 120,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& h1': {
      fontSize: 28,
      margin: 0,
      color: '#3F2F6A',
      fontFamily: 'Gilroy-SemiBold, Lato',
    },
  },

  headerButton: {
    padding: '0 20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    height: 45,
    width: 120,
    borderRadius: 40,
    border: 0,
    '& h1': {
      fontSize: 17,
      textTransform: 'capitalize',
      fontFamily: 'Gilroy-Reg, sans-serif',
      color: '#FFF',
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  gridMain: {
    display: 'grid',
    textAlign: 'center',
    '&>:nth-child(1n + 1)': {
      display: 'flex',
      flexDirection: 'column',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      '&>:nth-child(3n+1)': {
        alignItems: 'flex-start',
      },

      '&>:nth-child(3n+2)': {
        alignItems: 'center',
      },

      '&>:nth-child(3n)': {
        alignItems: 'flex-end',
      },
    },

    [theme.breakpoints.between('sm', 'md')]: {
      gridTemplateColumns: '1fr 1fr',
      '&>:nth-child(2n+1)': {
        alignItems: 'flex-start',
      },

      '&>:nth-child(2n+2)': {
        alignItems: 'flex-end',
      },
    },

    // [theme.breakpoints.down("sm")]: {
    //   gridTemplateColumns: "1fr",
    //   "&>:nth-child(1n)": {
    //     alignItems: "center",
    //   },
    // },
  },

  cardItems: {
    textAlign: 'center',
  },

  cardImg: {
    position: 'relative',
    height: 322,
    marginTop: 20,
    backgroundColor: '#CCC',
    borderRadius: 15,
    maxWidth: 320,
    minWidth: 250,
    width: '90%',
    overflow: 'hidden',
    transition: 'all 0.2s ease',
    boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.55)',

    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      objectFit: 'cover',
      objectPosition: 'center center',
      width: '100%',
      height: 'inherit',
      cursor: 'pointer',
    },

    '&:hover': {
      opacity: '0.95',
      transform: 'scale(1.01)',
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 320,
      minWidth: 250,
      width: '90%',
    },

    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: 320,
      minWidth: 220,
      width: '90%',
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 320,
      minWidth: 240,
      width: '90%',
    },
  },

  cardInfo: {
    height: 60,
    marginTop: 10,
    marginBottom: 70,
    maxWidth: 320,
    minWidth: 250,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.up('lg')]: {
      maxWidth: 320,
      minWidth: 250,
      width: '90%',
    },

    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: 320,
      minWidth: 220,
      width: '90%',
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 320,
      minWidth: 240,
      width: '90%',
    },
  },

  cardInfoTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Gilroy-Reg',
    '& h1': {
      fontSize: 17,
      marginTop: 0,
      marginBottom: 0,
    },
    '& p': {
      fontSize: 15,
      marginTop: 0,
      marginBottom: 0,
    },
  },

  cardInfoBookmark: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& svg': {
      height: 23,
      width: 23,
    },
  },

  '@media screen and (max-width: 960px)': {
    main: {
      margin: '0 auto',
      width: '90%',
    },

    navigation: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      margin: '0',
      marginTop: 30,

      '& h1': {
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: 'translateX(-50%)',
        fontFamily: 'Gilroy-Reg, sans-serif',
        fontSize: 28,
      },

      '& svg': {
        cursor: 'pointer',
      },
    },

    header: {
      height: 80,
      width: '100%',
      margin: 0,
      marginBottom: 30,
      alignItems: 'flex-end',

      '& >:nth-child(1)': {
        fontFamily: 'Gilroy-Med, sans-serif',
        fontSize: 20,
      },
    },

    headerButton: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      '& h1': {
        display: 'none',
      },

      '& svg': {
        position: 'absolute',
      },
    },

    gridMain: {
      minWidth: 0,
      paddingBottom: 30,
    },
  },

  '@media screen and (max-width: 700px)': {
    navigation: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto',
      justifyContent: 'flex-start',

      '& h1': {
        transform: 'translateX(-20%)',
      },
    },

    header: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto',
      marginBottom: 30,
    },

    gridMain: {
      gridTemplateColumns: '1fr',
      '&>:nth-child(1n)': {
        alignItems: 'center',
      },
    },
  },
}));

export default useStyles;
