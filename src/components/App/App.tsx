import Header from '~components/Header';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <h2>Vite + React + TS + ESLint template</h2>
    </div>
  );
};

export default App;
