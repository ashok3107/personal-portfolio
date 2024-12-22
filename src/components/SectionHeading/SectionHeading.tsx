import { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

type SectionHeadingType = {
  headingText: string | ReactNode;
  hideLine?: boolean;
}

const SectionHeading = (props: SectionHeadingType) => {
  const { headingText, hideLine } = props;
  return (
    <>
      <div className={styles.heading}>{headingText}</div>
      {!hideLine && <span className={styles.horizontalLine}></span>}
    </>
  )
};

export default SectionHeading;