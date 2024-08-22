import styles from "./Experience.module.css";
import Job from "./Job/Job";
import { jobData } from "./JobData.ts";

const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      {jobData.map((job, index) => {
        return <Job key={index} {...job} />;
      })}
    </div>
  );
};

export default Experience;
