import { makeStyles } from '@material-ui/core/styles';
import Smoke from '../../Images/Smoke.png';

const useStyles = makeStyles(
  (theme) => ({
    header: {
      height: 64,
      paddingTop: 15,
    },

    nav: {
      color: '#18191F',
      width: '80%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      fontWeight: '600',
      '& ul': {
        padding: 0,
        width: 300,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        '& li': {
          cursor: 'pointer',
        },
      },

      '& span': {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      },
    },

    main: {
      margin: '0 auto',
      width: '80%',
    },

    title: {
      paddingTop: 50,
      textAlign: 'center',

      '& p': {
        fontWeight: 'bolder',
        color: '#3F2F6A',
        fontSize: 34,
        margin: '10px 0',
      },
    },

    platform: {
      color: '#FF6B6B',
    },

    expose: {
      color: '#7768F2',
    },

    titleButton: {
      marginTop: 30,

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

    titleBtn1: {
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },

    titleBtn2: {
      border: '2px solid #7768F2',
      '&:hover': {
        backgroundColor: '#FFF',
        border: '2px solid #7768F2',
      },
    },

    image: {
      margin: '0 auto',
      marginTop: 100,
      backgroundImage: `url(${Smoke})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: 300,
      height: 300,
    },

    exploreContent: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto',
      padding: '50px 0',
    },

    exploreBtn: {
      textTransform: 'none',
      boxSizing: 'border-box',
      margin: '0 5px',
      height: 52,
      width: 200,
      borderRadius: 45,
      fontSize: 13.5,
      letterSpacing: 0.5,
      fontFamily: 'Gilroy-Medium, sans-serif',
      lineHeight: 20,
      cursor: 'pointer',
      color: '#FFF',

      '& svg': {
        height: 20,
        width: 20,
        marginLeft: 10,
      },

      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
    },

    cards: {
      padding: '100px 0 200px 0',
      display: 'flex',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      '& div': {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        margin: 3,
        width: 280,
        minWidth: 280,
        height: 250,
        borderRadius: 16,
      },

      '& svg': {
        margin: '0 auto',
        width: 90,
        height: 90,
      },

      '& p:nth-of-type(1)': {
        marginTop: 0,
        textTransform: 'uppercase',
        fontSize: '19px',
      },

      '& p:nth-of-type(2), p:nth-of-type(3)': {
        fontFamily: 'Gilroy-Medium, sans-serif',
        fontSize: '14px',
      },

      '& p:nth-of-type(2)': {
        marginBottom: 0,
      },

      '& p:nth-of-type(3)': {
        marginTop: 0,
      },
    },

    card1: {
      backgroundColor: '#8B81FF',
    },

    card2: {
      backgroundColor: '#E580E4',
    },

    card3: {
      backgroundColor: '#FF6B6B',
    },

    footer: {
      display: 'flex',
      justifyContent: 'flex-start',
      position: 'relative',
      alignItems: 'center',
      color: '#FFF',
      height: 58,
      width: '100%',
      backgroundColor: '#352957',
      fontSize: '10px',
      '& p': {
        marginLeft: '46.5%',
        // left: '46.5%',
      },
      '& div': {
        marginLeft: 'auto',
        marginRight: '20%',
        '& svg': {
          marginLeft: '20px',
        },
      },
    },
  }),
  { index: 1 }
);


export default useStyles;
