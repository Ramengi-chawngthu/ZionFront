import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardItems: {
    textAlign: 'center'
  },

  cardImg: {
    position: 'relative',
    height: 322,
    marginTop: 20,
    backgroundColor: '#CCC',
    borderRadius: 10,
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
      cursor: 'pointer'
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 320,
      minWidth: 250,
      width: '90%'
    },

    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: 320,
      minWidth: 220,
      width: '90%'
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 320,
      minWidth: 240,
      width: '90%'
    }
  },

  cardInfo: {
    height: 60,
    marginTop: 10,
    maxWidth: 320,
    minWidth: 250,
    width: '90%',
    display: 'flex',

    [theme.breakpoints.up('lg')]: {
      maxWidth: 320,
      minWidth: 250,
      width: '90%'
    },

    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: 320,
      minWidth: 220,
      width: '90%'
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 320,
      minWidth: 240,
      width: '90%'
    }
  },

  cardInfoAvatar: {
    display: 'flex',
    alignItems: 'center'
  },

  cardInfoTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Gilroy-Reg',
    marginLeft: 16,
    marginTop: 4,

    '& h1': {
      fontSize: 17,
      marginTop: 0,
      marginBottom: 0
    },
    '& p': {
      fontSize: 15,
      marginTop: 0,
      marginBottom: 0
    }
  },

  cardInfoBookmark: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    '& svg': {
      height: 23,
      width: 23
    }
  },

  cardRating: {
    width: '90%',
    maxWidth: 320,
    minWidth: 250,
    display: 'flex',

    [theme.breakpoints.up('lg')]: {
      maxWidth: 320,
      minWidth: 250,
      width: '90%'
    },

    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: 320,
      minWidth: 220,
      width: '90%'
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 320,
      minWidth: 240,
      width: '90%'
    }
  }
}));

export default useStyles;
