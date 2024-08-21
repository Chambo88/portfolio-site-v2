import styles from "./App.module.css";
import Background from "./components/background/Background";

function App() {
  return (
    <div className={styles.app}>
      <Background>
        <div>Hello!</div>
      </Background>
    </div>
  );
}

export default App;
