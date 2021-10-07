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
      fontFamily: 'Gilroy-SemiBold, Lato'
    }
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

    header: {
      height: 80,
      width: '100%',
      margin: 0,
      marginBottom: 30,
      alignItems: 'flex-end',

      '& >:nth-child(1)': {
        fontFamily: 'Gilroy-Med, sans-serif',
        fontSize: 20
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
    },

    gridMain: {
      minWidth: 0,
      paddingBottom: 30
    }
  },

  '@media screen and (max-width: 700px)': {
    navigation: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto',
      marginBottom: 60,

      '& h1': {
        transform: 'translateX(-20%)'
      }
    },

    header: {
      maxWidth: 320,
      minWidth: 240,
      margin: '0 auto',
      marginBottom: 30
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
