import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '60%',
    margin: '0 auto',
    transform: 'translateX(11%)',
    paddingTop: 30,
    paddingBottom: 100
  },
  navigation: {
    display: 'none'
  },

  header: {
    display: 'flex',
    color: '#3F2F6A',
    alignItems: 'center'
  },

  profilePic: {
    marginLeft: 'auto'
  },

  infoButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 80
  },

  infoButton: {
    width: 200,
    height: 60,
    cursor: 'pointer',
    borderRadius: 13,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E6E2FC',
    color: theme.palette.primary.main,
    fontFamily: 'Lato, sans-serif'
  },

  infoIcons: {
    '& i': {
      marginRight: 10
    },
    '& span': {}
  },

  avatarLine: {
    width: '100%',
    height: 0,
    border: '1px solid #e7e7e9',
    margin: '80px 0'
  },

  description: {
    // color: '#3F2F6A',
    // fontFamily: 'Lato, sans-serif',
    marginTop: theme.spacing(10),
    '& h1': {
      marginBottom: theme.spacing(6),
      fontSize: 20,
      textAlign: 'center'
    },

    '& p': {
      fontSize: 18,
      textAlign: 'left',
      wordSpacing: '1px'
    }
  },

  userInfo: {
    // backgroundColor: '#9687e7',
    // margin: '100px 0',
    // borderRadius: 3,
    // height: 500,
    // width: '100%',
    // color: '#3F2F6A',
    // padding: 4

    borderTop: '2px solid #e7e7e9',
    // borderBottom: '2px solid #e7e7e9',
    borderRadius: 3,
    height: 400,
    width: '60%',
    marginTop: 120,
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  profileImgContainer: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    margin: '10px auto 40px',
    overflow: 'hidden'
  },

  about: {
    marginTop: theme.spacing(10),
    '& h1': {
      marginTop: '40px',
      marginBottom: theme.spacing(6),
      textAlign: 'center'
    },

    '& p': {
      fontSize: '18px',
      textAlign: 'left',
      wordSpacing: '2px'
    }
  },

  social: {
    marginTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    '& h1': {
      marginTop: 40,
      marginBottom: theme.spacing(6),
      textAlign: 'center'
    }
  },

  socialIconContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '& p': {
      fontFamily: 'Bowhouse',
      fontSize: 20,
      textTransform: 'uppercase',
      marginLeft: 20
    }
  },

  socialIconLayout: {
    display: 'flex',
    marginTop: 8,
    justifyContent: 'center'
  },

  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#FFFBFE',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.15 )',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  '@media screen and (max-width: 1200px)': {
    main: {
      width: '60%',
      transform: 'translateX(20%)'
    }
  },

  '@media screen and (max-width: 960px)': {
    main: {
      width: '90%',
      transform: 'translateX(0)'
    },

    header: {
      display: 'none'
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      margin: '0',
      marginBottom: 60,

      '& h1': {
        fontFamily: 'Gilroy-Reg, sans-serif',
        fontSize: 28,
        color: '#3F2F6A'
      },

      '& svg': {
        cursor: 'pointer'
      }
    }
  },

  '@media screen and (max-width: 700px)': {
    socialIconContainer: {
      gridTemplateColumns: '1fr',
      gap: '4%'
    },
    navigation: {
      marginBottom: 60
    },
    infoButton: {
      width: 100,
      justifyContent: 'center'
    },
    infoIcons: {
      '& span': {
        display: 'none'
      }
    }
  }
}));

export default useStyles;
