import { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import HomeBurger from '../HomeBurger';
import useStyles from './myProfileStyle';
import SidebarContext from '../../Context/SidebarContext';

export default function Main() {
  const { setIsSidebar } = useContext(SidebarContext);
  const classes = useStyles();
  const HandleClick = () => {
    setIsSidebar(true);
  };
  return (
    <Box className={classes.main}>
      <Box className={classes.navigation}>
        <HomeBurger click={HandleClick} />
        <h1>Zion</h1>
        <Avatar
          alt="Tate McRae"
          src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/03/Tate-McRae.jpg"
        />
      </Box>

      <Box className={classes.header}>
        <h1>Zion</h1>
        <Box className={classes.profilePic}>
          <Avatar
            alt="Tate McRae"
            src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/03/Tate-McRae.jpg"
          />
        </Box>
      </Box>

      <Box className={classes.info}>
        <Box className={classes.infoButtons}>
          <Box className={classes.infoButton}>
            <div className={classes.infoIcons}>
              <i className="fas fa-th-large"></i>
              <span>Posts</span>
            </div>
            <p>100</p>
          </Box>
          <Box className={classes.infoButton}>
            <div className={classes.infoIcons}>
              <i className="fas fa-running"></i>
              <span>Followers</span>
            </div>
            <p>100</p>
          </Box>
          <Box className={classes.infoButton}>
            <div className={classes.infoIcons}>
              <i className="fas fa-users"></i>
              <span>Following</span>
            </div>
            <p>100</p>
          </Box>
        </Box>
      </Box>

      <div className={classes.avatarLine}></div>

      <Box className={classes.profile}>
        <div className={classes.profileImgContainer}>
          <img
            src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/03/Tate-McRae.jpg"
            alt="tate"
            style={{
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        <div className={classes.description}>
          <h1>Tate McRae</h1>
          <p>
            Fugiat et irure veniam sint duis amet laborum aute eu pariatur
            deserunt qui quis irure. Occaecat eiusmod dolore duis amet ad.
            Excepteur occaecat fugiat voluptate consequat ea sit veniam veniam
            ipsum occaecat. Consectetur ut nostrud excepteur enim. Exercitation
            do deserunt qui culpa nulla reprehenderit labore dolore adipisicing
            occaecat voluptate ex deserunt eiusmod.
          </p>
        </div>
      </Box>

      <Box className={classes.userInfo}>
        <div className={classes.about}>
          <h1>About</h1>
          <p>
            Sint sint esse officia nostrud reprehenderit voluptate velit aliquip
            minim veniam est anim dolor. Incididunt incididunt laboris culpa
            reprehenderit cillum minim. Labore duis pariatur aliqua commodo nisi
            duis culpa ex Lorem id. Labore dolore nisi cupidatat enim in.
            Commodo dolor deserunt exercitation in consequat aliquip elit et
            reprehenderit sunt anim culpa mollit adipisicing.
          </p>
        </div>
        <div className={classes.social}>
          <h1>Socials</h1>
          <div className={classes.socialIconContainer}>
            <div className={classes.socialIconLayout}>
              <div className={classes.socialIcon}>
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ color: '#EC4957' }}
                ></i>
              </div>
              <p>Not available</p>
            </div>
            <div className={classes.socialIconLayout}>
              <div className={classes.socialIcon}>
                <i
                  className="fab fa-facebook-square fa-2x"
                  style={{ color: '#1F8BE5' }}
                ></i>
              </div>
              <p>Not available</p>
            </div>
            <div className={classes.socialIconLayout}>
              <div className={classes.socialIcon}>
                <i
                  className="fab fa-whatsapp fa-2x"
                  style={{ color: '#3FEC70' }}
                ></i>
              </div>
              <p>Not available</p>
            </div>
            <div className={classes.socialIconLayout}>
              <div className={classes.socialIcon}>
                <i
                  className="fas fa-phone fa-2x"
                  style={{ color: '#7768F2' }}
                ></i>
              </div>
              <p>Not available</p>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
