import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TechStackCard from '../../components/TechStackCard/TechStackCard';
import { PORTFOLIO_PROJECTS } from '../../constants/PortfolioConstants';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <SectionHeading headingText="Portfolio (Personal Projects)" />
      <div className={styles.portfolioPageDesc}>A showcase of personal projects that I developed to highlight my skills in building responsive, efficient and user-friendly interfaces with HTML5, CSS3, JavaScript, TypeScript, React and Vite</div>
      <div className={styles.content}>
        {PORTFOLIO_PROJECTS.map(portfolio => (
          <a className={styles.portfolioItem} key={portfolio.name} href={portfolio.link} target='_blank'>
            <h4 className={styles.mobileOnly}>{portfolio.name}</h4>
            <div className={styles.portfolioImg}>
              <img src={portfolio.image} alt={portfolio.name} />
            </div>
            <div className={styles.portfolioInfo}>
              <h4>{portfolio.name}</h4>
              <span className={styles.portfolioInfoDesc}>{portfolio.description}</span>
              <TechStackCard techStack={portfolio.techStack} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
};

export default Portfolio;