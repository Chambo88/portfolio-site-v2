import styles from "./ProjectParagraph.module.css";

interface ProjectParagraphProps {
  title: string;
  content: string;
}

const ProjectParagraph: React.FC<ProjectParagraphProps> = ({
  title,
  content,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.line} />
      </div>
      <div className={styles.rightContainer}>
        <h3 className={styles.title}>{`${title}`}</h3>
        <p className={styles.content}>{`${content}`}</p>
      </div>
    </div>
  );
};
export default ProjectParagraph;
