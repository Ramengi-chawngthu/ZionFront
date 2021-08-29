import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import Burger from './Burger';
import Minimain from './Minimain';

import Email from '../../Svg/MyProfileSvg/Email.js';
import Insta from '../../Svg/MyProfileSvg/Insta.js';
import Whatsapp from '../../Svg/MyProfileSvg/Whatsapp.js';
import Fb from '../../Svg/MyProfileSvg/Fb.js';
import Address from '../../Svg/MyProfileSvg/Address.js';
import Phone from '../../Svg/MyProfileSvg/Phone.js';
import StoresSvg from '../../Svg/HomeSvg/StoresSvg';
import Cake from '../../Svg/MyProfileSvg/Cake';
import StarRates from '../../Svg/MyProfileSvg/StarRates';
import Baddress from '../../Svg/MyProfileSvg/Baddress';
import Wphone from '../../Svg/MyProfileSvg/Wphone';
import Wemail from '../../Svg/MyProfileSvg/Wemail';

import Button from '@material-ui/core/Button';

function Profile() {
  const [toggleSidebar, SettoggleSidebar] = useState(false);
  useEffect(() => {
    console.log(toggleSidebar);
  }, [toggleSidebar]);
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        {toggleSidebar && (
          <div style={{ height: '100vh', width: '100vw' }}>
            <div
              onClick={() => {
                SettoggleSidebar((val) => !val);
              }}
            >
              <Burger />
            </div>

            <p>To be implemented later</p>
          </div>
        )}
        <div className={classes.profr}>
          <div className={classes.profc}>
            <h1 className={classes.proname}>Profile Name</h1>
            <div className={classes.propic}></div>
          </div>
          <div className={classes.procard}>
            <div className={classes.description}></div>
            <div className={classes.flexr1}>
              <div className={classes.storeno}>
                <StoresSvg /> Number of stores
              </div>
              <div className={classes.socialmediarow}>
                <Fb />
                <Insta />
                <Whatsapp />
              </div>
            </div>
            <div className={classes.flexr2}>
              <div className={classes.aligner}>
                <Email />
                Email info{' '}
              </div>{' '}
              <div className={classes.aligner}>
                <Phone />
                Phone number
              </div>
              <div className={classes.aligner}>
                <Address />
                Mizoram
              </div>
              <Button variant='outlined'> 34343</Button>
              <Button variant='outlined'>34343</Button>
            </div>
          </div>
        </div>
        <div className={classes.optionbar}>
          <h1 className={classes.proname}>Check my </h1>
          <Button variant='outlined'> 34343</Button>
          <Button variant='outlined'>34343</Button>
          <Button variant='outlined'> 34343</Button>
        </div>
        {/* if there is no shop created prior.. then display a button for creating */}
        <div className={classes.shopcard}>
          <div className={classes.shopcardbord}>
            <div className={classes.flexc}>
              <StarRates />
              <div className={classes.shopcardname}> Store Name </div>
              <div className={classes.shopcarddescrip}>Store description </div>
              <div className={classes.flexr3}>
                <div className={classes.mr1}>Followers : 1231 </div>{' '}
                <div className={classes.mr1}>Following : 1231</div>
              </div>
              <div className={classes.flexr3}>
                <div className={classes.flexalign}>
                  <Cake />
                  Category
                </div>{' '}
                <div className={classes.flexalign}>
                  <Baddress />
                  Address
                </div>
              </div>
              <div className={classes.flexr4}>
                <div className={classes.flexalign}>
                  <Wemail />
                  Email info{' '}
                </div>{' '}
                <div className={classes.flexalign}>
                  <Wphone />
                  Phone number
                </div>
                <div className={classes.scbutton}>
                  <Button variant='outlined'>34343</Button>
                  <Button variant='outlined'> 34343</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* From below here just showchase whatever is in the profile's gallery */}
        <div>
          <Minimain />
        </div>
      </div>
    </>
  );
}

export default Profile;
