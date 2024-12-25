import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { workExperience } from '../../constants/WorkExperience';
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
              <div className={styles.projectDetails} key={project.projectName}>
                <div className={styles.projectName}>{project.projectName}</div>
                <ul className={styles.projectExp}>
                  {project.projectExp.map((projectExpItem, index) => (
                    <li key={index}>{projectExpItem}</li>
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