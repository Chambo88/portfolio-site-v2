import styles from "./App.module.css";
import Background from "./components/background/Background";
import HeaderNav from "./components/headerNav/HeaderNav";

function App() {
  return (
    <div className={styles.app}>
      <Background />
      <div className={styles.flexContainer}>
        <HeaderNav />
      </div>
    </div>
  );
}

export default App;
