import { TECH_CONSTANTS } from '../../constants/Tech';
import { iconMap } from '../../utils/iconsMap';
import styles from './TechStackCard.module.scss';

type TechStackCardType = {
  techStack: Array<string>;
};

const TechStackCard = (props: TechStackCardType) => {
  const { techStack } = props;
  return (
    <div className={styles.techStacks}>
      {techStack.map(stack => (
        <div key={stack} className={styles.stackCard}>
          <img src={iconMap[TECH_CONSTANTS[stack]?.icon]} />
          <span>{TECH_CONSTANTS[stack]?.label}</span>
        </div>
      ))}
    </div>
  )
};

export default TechStackCard;