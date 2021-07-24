import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '64px',
    paddingTop: '15px',
  },
  // footer: {
  //   height: '64px',
  //   width: '100%',
  //   paddingBottom: '15px',
  // },

  nav: {
    color: '#18191F',
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: '600',
    '& ul': {
      padding: 0,
      width: '300px',
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
    paddingTop: '50px',
    textAlign: 'center',

    '& p': {
      fontWeight: 'bolder',
      color: '#3F2F6A',
      fontSize: '34px',
      margin: '10px 0',
    },
    '& button': {
      textTransform: 'none',
      boxSizing: 'border-box',
      cursor: 'pointer',
      margin: '0 5px',
      height: '60px',
      width: '152px',
      borderRadius: '48px',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '1px',
      fontFamily: 'Gilroy-Bold, sans-serif',
      lineHeight: '20px',
      color: 'white',
      backgroundColor: '#FF6B6B',
      '&:hover': {
        backgroundColor: '#FFA06B',
        color: 'white',
      },
      '& svg': {
        height: '26px',
        width: '22px',
        marginLeft: '5px',
      },
    },
  },

  platform: {
    color: '#FF6B6B',
  },

  expose: {
    color: '#7768F2',
  },

  titleButton: {
    marginTop: '30px',
    paddingTop: '50px',
    textAlign: 'center',
    '& button': {
      textTransform: 'none',
      boxSizing: 'border-box',
      margin: '0 5px',
      height: '48px',
      width: '130px',
      borderRadius: '48px',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '1px',
      fontFamily: 'Gilroy-Bold, sans-serif',
      lineHeight: '20px',
      cursor: 'pointer',
      color: '#7768F2',
      backgroundColor: 'white',
      borderWidth: '2px',
      borderColor: ' #7768F2',
      '&$disabled': {
        backgroundColor: '#7768F2',
        color: 'white',
        // cursor: 'not-allowed',
        pointerEvents: 'auto',
      },
      '& svg': {
        height: '20px',
        width: '20px',
        marginRight: '5px',
      },
    },
  },
  disabled: {},
  rectContainer: {
    margin: '0 auto',
    marginTop: '30px',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rect: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: 'white',
    width: '314px',
    border: '1px',
    height: '202px',
    borderRadius: '20px',
    '& span': {
      color: 'white',
      margin: '40px 0px 0px 12px',
      fontSize: '26px',
      fontFamily: 'Gilroy-Bold, sans-serif',
    },
    '& p': {
      fontWeight: 'regular',
      color: 'white',
      fontSize: '22px',
      margin: '25px 25px 0px 25px',
      fontFamily: 'Gilroy-medium, sans-serif',
    },
    '& div': {
      width: '72px',
      border: '0px',
      height: '68px',
      borderRadius: '10px',
      backgroundColor: 'white',
      '& svg': {
        height: '40px',
        width: '45px',
        margin: '14px 12px 14px 13px',
      },
    },
  },
  login: {
    backgroundColor: '#7768F2',
    borderWidth: '2px',
    borderColor: 'white',
    color: 'white',
    '&:hover': {
      backgroundColor: '#688FF2',
      color: 'white',
      // borderColor: '#688FF2',
    },
  },
  signup: {
    backgroundColor: 'white',
    borderWidth: '2px',
    borderColor: '#7768F2',
    color: '#7768F2',
  },
}));

export default useStyles;
