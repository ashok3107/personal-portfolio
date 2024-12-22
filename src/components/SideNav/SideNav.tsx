import Linkedin from '../../assets/icons/links/linkedin.svg?react';
import GitHub from '../../assets/icons/links/github.svg?react';
import Button from '../Button/Button';
import styles from './SideNav.module.scss';
import { Link } from 'react-router-dom';

type SideNavProps = {

};

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
    route: '/portfolio'
  }
];

const SideNav = (props: SideNavProps) => {
  return (
    <div className={styles.sideNavContainer}>
      <div className={styles.basicInfo}>
        <div className={styles.name}>Ashok Madhavan Ramesh</div>
        <div className={styles.designation}>Frontend Engineer</div>
        <div className={styles.designation}>Austin, TX | 1-860-593-7902</div>
      </div>
      <div className={styles.sideNavLinks}>
        {sideNavLinks.map(navLink => (
          <Link key={navLink.route} className={styles.navLinkItem} to={navLink.route}>
            {navLink.label}
          </Link>
        ))}
      </div>
      <div className={styles.socialMediaLinks}>
        <span className={styles.linkIcon}>
          <Button
            href="https://www.linkedin.com/in/ashok-madhavan-ramesh-347913194/"
            title="Linkedin Profile"
          >
            <Linkedin height={30} width={30} />
          </Button>
        </span>
        <span className={styles.linkIcon}>
          <Button
            href="https://github.com/ashok3107"
            title="My GitHub Profile"
          >
            <GitHub height={30} width={30} />
          </Button>
        </span>
      </div>
    </div>
  )
};

export default SideNav;