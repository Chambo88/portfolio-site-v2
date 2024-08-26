import Job from "./Job/Job";
import { jobData } from "./JobData.ts";
import SimpleBar from "simplebar-react";
import styles from "./Experience.module.css";

const Experience: React.FC = () => {
  return (
    <div className={styles.marginContainer}>
      <SimpleBar className={styles.container}>
        <div className={styles.spacer}></div>
        {jobData.map((job, index) => {
          return <Job key={index} {...job} />;
        })}
        <div className={styles.spacer}></div>
      </SimpleBar>
    </div>
  );
};

export default Experience;
