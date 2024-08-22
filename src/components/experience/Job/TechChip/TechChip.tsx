import styles from "./TechChip.module.css";

interface TechChipProps {
  text: string;
}

const TechChip: React.FC<TechChipProps> = ({ text }) => {
  return <div className={styles.chip}>{text}</div>;
};

export default TechChip;
