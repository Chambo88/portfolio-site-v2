import styles from "./Contact.module.css";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Download from "@mui/icons-material/Download";

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <ContactLink
          name={"Github"}
          src={"https://github.com/Chambo88"}
          icon={<GitHub className={styles.iconSize} />}
        />
        <ContactLink
          name={"LinkedIn"}
          src={"https://www.linkedin.com/in/ben-chamberlain-a39948198/"}
          icon={<LinkedIn className={styles.iconSize} />}
        />
        <a href="/Ben_Chamberlain_CV.pdf" download>
          <div className={styles.button}>
            <div className={styles.buttonText}>2024_CV</div>
            <div className={styles.iconWrapper}>
              <Download className={styles.iconSize} />
            </div>
          </div>
        </a>
        <ContactLink
          name={"BenChamberlain@gmail.com"}
          src={
            "mailto:BenChamberlain88@Gmail.com?body=%0D%0A%0D%0ASent%20from%20BenChamberlain.dev"
          }
          icon={<Email className={styles.iconSize} />}
        />
      </nav>
    </div>
  );
};

interface ContactLinkProps {
  name: string;
  src: string;
  icon: JSX.Element;
}

const ContactLink: React.FC<ContactLinkProps> = ({ name, src, icon }) => {
  const handleClick = () => {
    if (src.startsWith("mail")) {
      window.location.href = src;
    } else {
      window.open(src, "_blank");
    }
  };
  return (
    <div className={styles.button} onClick={handleClick}>
      <h1 className={styles.buttonText}>{name}</h1>
      <div className={styles.iconWrapper}>{icon}</div>
    </div>
  );
};

export default Contact;
