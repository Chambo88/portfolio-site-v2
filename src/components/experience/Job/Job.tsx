import styles from "./Job.module.css";
import TechChip from "./TechChip/TechChip";

interface JobProps {
  title: string;
  technologies: string[];
  role: string;
  description: string;
  dateStart: string;
  dateEnd: string;
}

const Job: React.FC<JobProps> = (props: JobProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.date}>
        {props.dateStart} &ndash; {props.dateEnd}
      </div>
      <div className={styles.contents}>
        <h4 className={styles.jobTitle}>{props.title}</h4>
        <p className={styles.jobSubtitle}>{props.role}</p>
        <p>{props.description}</p>
        {/* <div className={styles.techContainer}>
          {props.technologies.map((tech, index) => (
            <TechChip text={tech} key={index} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Job;
