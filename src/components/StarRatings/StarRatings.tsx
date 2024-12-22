import styles from './StarRatings.module.scss';

type StarRatingProp = {
  label: string;
  rating: number;
  hideLabel?: boolean;
};

const StarRating = (props: StarRatingProp) => {
  const { label, rating, hideLabel } = props;
  return (
    <div className={styles.ratingContainer}>
      {!hideLabel && <div>{label}</div> }
      <div className={styles.ratedStars}>
        <div className={styles.starRatings} data-rate={rating}></div>
      </div>
    </div>
  )
};

export default StarRating;