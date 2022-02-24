import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import useStyles from './CardStyles';
import BookmarkCardSvg from '../../../Svg/HomeSvg/BookmarkCardSvg';

function Cards({ image }) {
  const imgPlaceholder =
    'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80';
  const imgLink = image ? image : imgPlaceholder;
  const classes = useStyles();
  return (
    <div className={classes.cardItem}>
      <div className={classes.cardImg}>
        <img alt="" src={imgLink} />
      </div>
      <div className={classes.cardInfo}>
        <div className={classes.cardInfoAvatar}>
          <Avatar
            alt="Tate McRae"
            src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/03/Tate-McRae.jpg"
          />
        </div>
        <div className={classes.cardInfoTitle}>
          <h1>Mega Matcha</h1>
          <p>Cereminial Grade</p>
        </div>
        <div className={classes.cardInfoBookmark}>
          <BookmarkCardSvg />
        </div>
      </div>
      <div className={classes.cardRating}>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </div>
    </div>
  );
}

export default Cards;
