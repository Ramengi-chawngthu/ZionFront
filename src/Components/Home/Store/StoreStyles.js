import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '70%',
    margin: '0 auto',
    transform: 'translateX(15%)',
    paddingTop: 30
  },
  navigation: {
    display: 'none'
  },

  title: {
    '& h1': {
      fontSize: 28,
      color: '#3F2F6A',
      fontFamily: 'Gilroy-SemiBold, Lato'
    }
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
    height: 90
  },

  banner: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    height: 350,
    width: '100%',

    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      objectFit: 'cover',
      objectPosition: 'center 80%',
      width: '100%',
      height: 'inherit',
      cursor: 'pointer'
    }
  },

  searchBox: {
    padding: '35px 0',
    display: 'flex',
    justifyContent: 'center'
  },

  searchForm: {
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
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )'
      }
    }
  },

  searchInput: {
    width: '75%',
    fontFamily: 'Gilroy-Medium, sans-serif',
    position: 'absolute',
    top: '50%',
    left: '45%',
    transform: 'translate(-50%,-50%)',
    outline: 'none',
    border: 'none',
    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
    fontSize: 16
  },

  filter: {
    marginLeft: 'auto'
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
      color: '#FFF'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },

  gridMain: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    '&>:nth-child(1n)': {
      display: 'flex',
      flexDirection: 'column'
    },

    '&>:nth-child(3n + 2)': {
      alignItems: 'center'
    },

    '&>:nth-child(3n + 3)': {
      alignItems: 'flex-end'
    }
  },

  '@media screen and (max-width: 1200px)': {
    main: {
      width: '60%',
      transform: 'translateX(20%)'
    },

    gridMain: {
      gridTemplateColumns: '1fr 1fr',
      '&>:nth-child(2n+1)': {
        alignItems: 'flex-start'
      },

      '&>:nth-child(2n+2)': {
        alignItems: 'flex-end'
      }
    }
  },

  '@media screen and (max-width: 960px)': {
    main: {
      width: '90%',
      transform: 'translateX(0)'
    },

    navigation: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      margin: '0',
      marginBottom: 60,

      '& h1': {
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: 'translateX(-50%)',
        fontFamily: 'Gilroy-Reg, sans-serif',
        fontSize: 28
      },

      '& svg': {
        cursor: 'pointer'
      }
    },

    headerButton: {
      height: 40,
      width: 40,
      minWidth: 40,
      borderRadius: '100%',
      justifyContent: 'center',
      '& h1': {
        display: 'none'
      },

      '& svg': {
        position: 'absolute'
      }
    }
  },

  '@media screen and (max-width: 700px)': {
    navigation: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto',
      marginBottom: 60
    },

    title: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto'
    },

    banner: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto'
    },

    header: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto',
      marginTop: 60,
      height: 50
    },

    gridMain: {
      gridTemplateColumns: '1fr',
      '&>:nth-child(1n)': {
        alignItems: 'center'
      }
    }
  }
}));

export default useStyles;
