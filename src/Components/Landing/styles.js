import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    height: '64px',
    paddingTop: '15px',
  },

  nav: {
    color: '#18191F',
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
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
  },

  platform: {
    color: '#FF6B6B',
  },

  expose: {
    color: '#7768F2',
  },

  titleButton: {
    marginTop: '30px',

    '& button': {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '48px',
      outline: 'none',

      boxSizing: 'border-box',
      margin: '0 5px',
      height: '48px',
      width: '130px',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '1px',
      fontFamily: 'Gilroy-Bold, sans-serif',
      lineHeight: '20px',

      '& span': {
        // position: 'relative',
        overflow: 'visible',
        margin: '0 auto',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-around',

        '& svg': {
          height: '20px',
          width: '20px',
        },
      },
    },
  },
  circle1: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    transform: 'translate(-50%,-50%) scale(0)',
    animation: `$scale 0.5s ease-out`,
  },
  circle2: {
    position: 'absolute',
    backgroundColor: '#7768F2',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    transform: 'translate(-50%,-50%) scale(0)',
    animation: `$scale 0.5s ease-out`,
  },
  button1: {
    border: 0,
    color: '#FFF',
    backgroundColor: '#7768F2',
    border: '2px solid #7768F2',
  },
  button2: {
    color: '#7768F2',
    backgroundColor: '#FFF',
    border: '2px solid #7768F2',
  },

  '@keyframes scale': {
    to: {
      transform: 'translate(-50%,-50%) scale(3)',
      opacity: '0.1',
    },
  },
});

export default useStyles;
