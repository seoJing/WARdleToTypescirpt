import { useNavigate } from 'react-router-dom';
import styles from '../css/Phase2.module.css';
import deathImg from '../img/PlayerDeath.gif';

function Death() {
  const navigate = useNavigate();

  setTimeout(function () {
    navigate('/Gameover');
  }, 1000);

  return (
    <>
      <div className={styles.background}></div>
      <img src={deathImg} alt={'deathImg'} className={styles.deathImg}></img>
    </>
  );
}

export { Death };
