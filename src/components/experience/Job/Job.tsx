import styles from "./Job.module.css";
import JobPoint from "./JobPoint/JobPoint";
import TechChip from "./TechChip/TechChip";
import { JobDetails } from "../types";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Job: React.FC<JobDetails> = (props: JobDetails) => {
  const handleClick = () => {
    window.open(props.link, "_blank");
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.date}>
        {props.dateStart} &ndash; {props.dateEnd}
      </div>
      <div className={styles.contents}>
        <h4 className={styles.jobTitle}>
          {props.title}
          <div className={styles.arrowAnchor}>
            <div className={styles.transitionContainer}>
              <ArrowOutwardIcon className={styles.arrowIcon} />
            </div>
          </div>
        </h4>
        <p className={styles.jobSubtitle}>{props.role}</p>
        <div className={styles.descriptionContainer}>
          {props.description.map((point, index) => (
            <JobPoint text={point} key={index} />
          ))}
        </div>
        <div className={styles.techContainer}>
          {props.technologies.map((tech, index) => (
            <TechChip text={tech} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
