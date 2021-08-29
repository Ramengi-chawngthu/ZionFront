import { makeStyles } from '@material-ui/core/styles';
import Wall from '../../Images/Wall.png';
import Wallbig from '../../Images/Wallbig.png';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    color: theme.palette.primary.main,
    position: 'fixed',
    top: 5,
    left: 7,
    bottom: 0,
    width: 260,
    maxWidth: 300,
    minWidth: 180,
    height: '99vh',
    overflow: 'auto',
    border: '1px solid #7768f28a',
    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.15 )',
    backdropFilter: 'blur( 8.5px )',
    borderRadius: 20,
    '-webkit-backdrop-filter': 'blur( 8.5px )',

    '@media (max-width:1220px)': {
      width: '230px',
    },
  },

  container: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 30,

    '& span': {
      marginRight: 'auto',
      marginLeft: 4,
    },

    '& svg': {
      margin: '0 4px',
      height: 40,
      width: 40,
      cursor: 'pointer',
    },
  },

  navIcons: {
    marginRight: 10,
    marginBottom: 2,
  },

  navSearchBarDiv: {
    padding: '35px 0',
    display: 'flex',
    justifyContent: 'center',
  },

  navSearchBarForm: {
    position: 'relative',
    width: 210,
    height: 40,
    borderRadius: 40,
    border: '1px solid #7768F2',

    '& button': {
      backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
      padding: 0,
      cursor: 'pointer',
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translate(-40%,25%)',
      border: 'none',
      '& svg': {
        cursor: 'pointer',
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
      },
    },
  },

  navSearchBar: {
    width: '75%',
    fontFamily: 'Gilroy-Medium, sans-serif',
    position: 'absolute',
    top: '50%',
    left: '45%',
    transform: 'translate(-50%,-50%)',
    outline: 'none',
    border: 'none',
    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
  },

  options1: {
    '& ul': {
      paddingLeft: 0,
      listStyle: 'none',

      '& li': {
        borderRadius: 10,
        marginLeft: 25,
        marginBottom: 30,
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Lato, sans-serif',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 3.5,
        width: '80%',

        '& span': {
          marginLeft: 12,
        },

        '& svg': {
          overflow: 'visible',
          marginLeft: 20,
          width: 27,
          height: 27,
        },
      },
    },
  },

  options2: {
    paddingTop: 40,
    '& ul': {
      paddingLeft: 0,
      listStyle: 'none',

      '& li': {
        borderRadius: 5,
        marginLeft: 25,
        marginBottom: 30,
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Lato, sans-serif',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 3.5,
        width: '80%',

        '& span': {
          marginLeft: 12,
        },

        '& svg': {
          overflow: 'visible',
          marginLeft: 20,
          width: 27,
          height: 27,
        },
      },
    },
  },

  footerOptions: {
    width: '100%',
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '30%',

    '& div': {
      cursor: 'pointer',
      marginBottom: 50,
      display: 'flex',
      justifyContent: 'center',

      '& span': {
        textAlign: 'center',
        marginLeft: 5,
        display: 'flex',
        alignItems: 'center',
      },
    },
  },

  logout: {
    color: '#FF6B6B',
  },

  // End of sidebar
  //start of Profile page mains
  proname: {
    // marginLeft: '360px',
    '& h1': {
      fontSize: 28,
      margin: 0,
      color: '#3F2F6A',
      fontFamily: 'Gilroy-SemiBold, Lato',
    },
  },
  procard: {
    backgroundImage: `url(${Wall})`,
    backgroundSize: 'fill',
    backgroundRepeat: 'no-repeat',
    // margin: 28.4,
    marginTop: 50,
    marginLeft: '10%',
    height: 350,
    width: 1100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  description: {
    height: '55%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px 20px 0px 0px',
  },
  profc: { display: 'flex', flexDirection: 'column' },
  profr: {
    // width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 25,
  },
  propic: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    backgroundColor: '#000000',
  },
  flexr1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  flexr2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    '& button': {
      textTransform: 'none',
      boxSizing: 'border-box',
      margin: '0 5px',
      height: 48,
      width: 130,
      borderRadius: 48,
      fontSize: 12,
      letterSpacing: 1,
      fontFamily: 'Gilroy-Bold, sans-serif',
      lineHeight: 20,
      cursor: 'pointer',

      '& svg': {
        height: 20,
        width: 20,
        marginRight: 5,
      },
    },
  },
  aligner: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  optionbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,

    alignItems: 'center',
    // width: '50%',
    '& button': {
      marginTop: 20,
      textTransform: 'none',
      boxSizing: 'border-box',
      margin: '0 5px',
      height: 48,
      width: 130,
      borderRadius: 48,
      fontSize: 12,
      letterSpacing: 1,
      fontFamily: 'Gilroy-Bold, sans-serif',
      lineHeight: 20,
      cursor: 'pointer',

      '& svg': {
        height: 20,
        width: 20,
        marginRight: 5,
      },
    },
  },
  scbutton: {
    '& button': {
      // marginTop: 20,
      textTransform: 'none',
      boxSizing: 'border-box',
      margin: '0 5px',
      height: 48,
      width: 130,
      borderRadius: 48,
      fontSize: 12,
      letterSpacing: 1,
      fontFamily: 'Gilroy-Bold, sans-serif',
      lineHeight: 20,
      cursor: 'pointer',

      '& svg': {
        height: 20,
        width: 20,
        marginRight: 5,
      },
    },
  },
  flexr3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
    color: 'white',
    marginBottom: 35,
  },
  flexr4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    color: 'white',
    marginBottom: 35,
  },
  mr1: {
    marginRight: 20,
    marginBottom: 20,
  },
  flexalign: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40,
    color: 'white',
    '& svg': {
      marginRight: 8,
    },
  },
  storeno: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialmediarow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 130,
  },
  shopcard: {
    backgroundImage: `url(${Wallbig})`,
    // backgroundSize: 'fit',
    backgroundRepeat: 'no-repeat',
    marginTop: 50,
    height: 420,
    width: 1200,
    borderRadius: 40,
  },
  shopcardbord: { padding: 70 },
  shopcardname: {
    marginLeft: 20,
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'Gilroy-Bold, sans-serif',
    // lineHeight: 20,
    marginTop: '2%',
    color: 'white',
  },
  shopcarddescrip: {
    marginLeft: 20,
    marginBottom: 15,
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: 'Gilroy-Bold, sans-serif',
    // lineHeight: 20,
    marginTop: '2%',
    color: 'white',
  },
  flexc: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
  },
  main: {
    marginLeft: '20%',
    maxWidth: 1200,

    '@media (max-width:1660px)': {
      width: '60%',
      marginLeft: '30%',
    },

    '@media (max-width:1220px)': {
      marginLeft: '33%',
    },
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
  profile: {
    textDecoration: 'none',
    color: 'inherit',
  },

  mainNavbar: {
    display: 'none',
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

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      '&>:nth-child(1n)': {
        alignItems: 'center',
      },
    },
  },

  cardItems: {
    textAlign: 'center',
  },

  cardImg: {
    height: 200,
    marginTop: 20,
    backgroundColor: '#CCC',
    borderRadius: 15,
    maxWidth: 320,
    minWidth: 250,
    width: '90%',

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
    backgroundColor: '#CCA',
    marginTop: 10,
    maxWidth: 320,
    minWidth: 250,
    width: '90%',

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

  '@media (max-width: 960px)': {
    sidebar: {
      display: 'none',
    },

    main: {
      margin: '0 auto',
    },

    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      marginBottom: 60,

      '& >:nth-child(2)': {
        fontSize: 20,
        padding: 5,
        marginTop: 20,
      },
    },

    mainNavbar: {
      width: '100%',
      display: 'block',
    },

    mainNavbarContainer: {
      width: '90%',
      maxWidth: 320,
      minWidth: 240,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
    },

    mainNavbarBurger: {
      cursor: 'pointer',
    },

    headerButton: {
      padding: '10px 20px',
      marginTop: 10,
    },

    mainNavbarIcons: {
      '& svg': {
        width: 35,
        paddingTop: '5px',
        marginLeft: 10,
        cursor: 'pointer',
      },
    },

    gridMain: {
      minWidth: 0,
      paddingBottom: 30,
    },
  },
}));

export default useStyles;
