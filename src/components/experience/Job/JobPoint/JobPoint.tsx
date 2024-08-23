import styles from "./JobPoint.module.css";

interface JobPointProps {
  text: string;
}

const JobPoint: React.FC<JobPointProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <hr className={styles.dash} />
      {text}
    </div>
  );
};

export default JobPoint;
