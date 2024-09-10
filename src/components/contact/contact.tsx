import styles from "./contact.module.css";
import GitHub from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Download from "@mui/icons-material/Download";

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <ContactLink
          name={"GITHUB"}
          src={"https://github.com/Chambo88"}
          icon={<GitHub fontSize="large" />}
        />
        <ContactLink
          name={"LINKEDIN"}
          src={"https://www.linkedin.com/in/ben-chamberlain-a39948198/"}
          icon={<LinkedIn fontSize="large" />}
        />
        <ContactLink
          name={"BENCHAMBERLAIN88@GMAIL.COM"}
          src={
            "mailto:BenChamberlain88@Gmail.com?subject=Hello&body=I%20want%20to%20contact%20you!"
          }
          icon={<Email fontSize="large" />}
        />
        <a href="/Ben_Chamberlain_CV.pdf" download>
          <button className={styles.button}>
            <div className={styles.iconWrapper}>
              <Download fontSize="large" />
            </div>
            <div className={styles.buttonText}>BEN_CHAMBERLAIN_CV.PDF</div>
          </button>
        </a>
      </nav>
    </div>
  );
};

interface ContactLink {
  name: string;
  src: string;
  icon: JSX.Element;
}

const ContactLink: React.FC<ContactLink> = ({ name, src, icon }) => {
  const handleClick = () => {
    if (src.startsWith("mail")) {
      window.location.href = src;
    } else {
      window.open(src, "_blank");
    }
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.buttonText}>{name}</div>
      <div className={styles.arrowAnchor}>
        <div className={styles.transitionContainer}>
          <ArrowOutwardIcon className={styles.arrowIcon} />
        </div>
      </div>
    </button>
  );
};

export default Contact;
