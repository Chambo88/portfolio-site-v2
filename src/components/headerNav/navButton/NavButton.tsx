import styles from "./NavButton.module.css";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  isActive,
  children,
  ...props
}) => {
  return (
    <button className={styles.button} {...props}>
      <span
        className={`${styles.buttonText} ${
          isActive ? styles.activeButtonText : ""
        } `}
      >
        {children}
      </span>
    </button>
  );
};

export default NavButton;
