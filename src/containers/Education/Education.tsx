import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from "./Education.module.scss";

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.educationContent}>
        <SectionHeading headingText="Education" />
        <div className={styles.content}>
          <div className={styles.collegeInfo}>
            <div className={styles.collegeLogo}></div>
            <div className={styles.collegeDetails}>
              <span>SSN College Of Engineering, Anna University</span>
              <span>Kalavakkam, Chennai, India</span>
            </div>
            <div className={styles.timeline}>
              07/2013 - 05/2017
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;