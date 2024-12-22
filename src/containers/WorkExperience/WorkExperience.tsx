import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { TECH_CONSTANTS } from '../../constants/Tech';
import { workExperience } from '../../constants/WorkExperience';
import { iconMap } from '../../utils/iconsMap';
import styles from './WorkExperience.module.scss';
import Button from '../../components/Button/Button';
import TechStackCard from '../../components/TechStackCard/TechStackCard';

const WorkExperience = () => {
  const [expCount, setExpCount] = useState(0);
  const experience = workExperience[expCount];
  return (
    <>
      <SectionHeading headingText={(
        <div className={styles.expHeader}>
          <span>Work Experience</span>
          <div className={styles.experienceCounter}>
            <Button onClick={() => setExpCount(expCount- 1)} disabled={expCount === 0}>{'<'}</Button>
            <span>{expCount + 1} of {workExperience.length}</span>
            <Button onClick={() => setExpCount(expCount + 1)} disabled={expCount + 1 === workExperience.length}>{'>'}</Button>
          </div>
        </div>
      )} />
      {/* {workExperience.map(experience => ( */}
        <div className={styles.workExperienceContainer}>
          <div className={styles.workExperienceItem}>
            <div className={styles.orgDetails}>
              <div className={styles.orgInfo}>
                <span className={styles.companyLogo}>{experience.companyLogo}</span>
                <span className={styles.companyName}>{experience.companyName} | {experience.designation}</span>
              </div>
              <div className={styles.timeline}>{experience.timeline}</div>
            </div>
            {experience.projects.map(project => (
              <div className={styles.projectDetails}>
                <div className={styles.projectName}>{project.projectName}</div>
                <ul className={styles.projectExp}>
                  {project.projectExp.map(projectExpItem => (
                    <li>{projectExpItem}</li>
                  ))}
                </ul>
                <div className={styles.techStack}>
                  <TechStackCard techStack={project.techStack} />
                </div>
              </div>
            ))} 
          </div>
        </div>
      {/* ))} */}
    </>
  )
};

export default WorkExperience;