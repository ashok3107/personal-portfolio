import StarRating from '../StarRatings/StarRatings';
import styles from './SkillCard.module.scss';
import { iconMap } from '../../utils/iconsMap';

type SkillCardType = {
  label: string;
  value: number;
  rating: string;
  years: number;
  icon: string;
};

const SkillCard = (props: SkillCardType) => {
  const {
    label, value, years, icon,
  } = props;
  return (
    <div className={styles.skillCard}>
      <img src={iconMap[icon]} alt={`${icon}_logo`} />
      <div className={styles.skillInfo}>
        <div className={styles.skillItem} key={label}>
          <StarRating label={label} rating={value} />
        </div>
        <div>Experience: {years} years</div>
      </div>
    </div>
  );
};

export default SkillCard;