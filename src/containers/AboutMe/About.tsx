import { iconMap } from '../../utils/iconsMap';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TechStackCard from '../../components/TechStackCard/TechStackCard';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <SectionHeading headingText="About" />
      <div className={styles.aboutMe}>
      Adept Frontend Engineer with 7 years experience and a proven track record at Tekion and Sirius Computer Solutions, specializing in React JS
 and Redux ecosystem. Excelled in building reusable components to complex containers with neat and well documented code with unit tests in
 Jest and React Testing Library, improving performance metrics and implementing pixel perfect UX to UI match. Demonstrates strong product
 ownership & leadership, innovative problem-solving / debugging skills and mentors junior developers.
      </div>
      <div className={styles.aboutMe}>
      Have prior experience in building mobile applications from the ground up using React Native, Redux and deployed
      them in App store and Play store for several US based organizations during my time in Sirius. Have also worked on bringing up web applications
      with Angular 4, Vue, Material UI and mobile applications for the same using Ionic 3.
      </div>
      <SectionHeading headingText="Skills" />
      <div className={styles.skills}>
        {/* {
          skills.map((skill) => (
            <SkillCard {...skill}></SkillCard>
          ))
        } */}
        {/* <table>
          <thead>
            <td className={styles.technologyName}>Language / Library</td>
            <td className={styles.rating}>Rating</td>
            <td className={styles.experience}>Experience</td>
          </thead>
          <tbody>
            {
              skills.map(skill => (
                <tr key={skill.label}>
                  <td className={styles.technologyName}>
                    <img src={iconMap[skill.icon]} alt={`${skill.icon}_logo`} />
                    <span>{skill.label}</span>
                  </td>
                  <td className={styles.rating}><StarRating label={skill.label} rating={skill.value} hideLabel /></td>
                  <td className={styles.experience}>{skill.years}</td>
                </tr>
              ))
            }
          </tbody>
        </table> */}
        <div className={styles.skillCard}>
          <b>Programming Languages:</b>
          <TechStackCard techStack={['javascript', 'typescript', 'html', 'css', 'sass']} />
        </div>
        <div className={styles.skillCard}>
          <b>Frameworks / Libraries:</b>
          <TechStackCard techStack={['react', 'redux', 'node', 'webpack', 'jest', 'rtl', 'jquery', 'reactNative', 'next']} />
        </div>
        <div className={styles.skillCard}>
          <b>DB Fundamentals:</b>
          <TechStackCard techStack={['mongo', 'mySQL']} />
        </div>
        <div className={styles.skillCard}>
          <b>Other tools / IDE:</b>
          <TechStackCard techStack={['bitbucket', 'gitlab', 'jira', 'visualcode', 'atom']} />
        </div>
      </div>
      <div className={styles.education}>
        <SectionHeading headingText="Education" />
        <div className={styles.educationInfo}>
          <img src={iconMap.graduation} alt="Education logo" />
          <div className={styles.collegeInfo}>
            <div>
              <div>Sri Sivasubramanya Nadar College Of Engineering, Anna University</div>
              <div>Kalavakkam, Chennai, Tamil Nadu, India</div>
              <div>CGPA: 7.87 / 10</div>
            </div>
            <div className={styles.educationTimeline}>
              07/2013 - 05/2017
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;