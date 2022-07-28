import { Link } from "react-router-dom"
import styles from './HomePage.module.css';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <div>
        <Link to='/sell'>
          <button className="button">판매하기</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;