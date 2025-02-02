import Linkedin from '../../assets/icons/links/linkedin.svg';
import GitHub from '../../assets/icons/links/github.svg';
import Button from '../Button/Button';
import styles from './SideNav.module.scss';
import { Link } from 'react-router-dom';
import { useLinkManagerContext } from '../../store/link-manger-context';

const sideNavLinks = [
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Experience',
    route: '/experience',
  },
  {
    label: 'Portfolio',
    route: '/projects'
  }
];

const SideNav = () => {
  const linkManager = useLinkManagerContext();
  return (
    <div className={styles.sideNavContainer}>
      <div className={styles.basicInfo}>
        <div className={styles.name}>Ashok Madhavan Ramesh</div>
        <div className={styles.designation}>Frontend Engineer</div>
        <div className={styles.designation}>Austin, TX | 1-860-593-7902</div>
      </div>
      <div className={styles.sideNavLinks}>
        {sideNavLinks.map(navLink => (
          <Link onClick={() => linkManager?.updateCurrPath(navLink.route)} key={navLink.route} className={`${styles.navLinkItem} ${linkManager?.currPathKey === navLink.route ? styles.highlight : ''}`} to={navLink.route}>
            {navLink.label}
          </Link>
        ))}
      </div>
      <div className={styles.socialMediaLinks}>
        <span className={styles.linkIcon}>
          <Button
            href="https://www.linkedin.com/in/ashok-madhavan-ramesh-347913194/"
            title="Linkedin Profile"
            target='_blank'
          >
            <img className={styles.btnImg} src={Linkedin} alt="Linkedin logo" />
          </Button>
        </span>
        <span className={styles.linkIcon}>
          <Button
            href="https://github.com/ashok3107"
            title="My GitHub Profile"
            target='_blank'
          >
            <img className={styles.btnImg} src={GitHub} alt="Github logo" />
          </Button>
        </span>
      </div>
    </div>
  )
};

export default SideNav;