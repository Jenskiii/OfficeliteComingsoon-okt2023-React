import { useEffect, useRef, useState } from "react";
import styles from "./timer.module.css";

export default function Timer({theme}) {
  let date = "27 jan 2024";

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();


  const startTimer = () => {
    let countdownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const currentDate = new Date();
      const distance = countdownDate - currentDate;

      const days = addZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = addZero(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
      const minutes = addZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = addZero(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  function addZero(time){
     return time < 10 ? `0${time}` : time
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className={styles.container} datatype={theme}>
        <h3 className={styles.heading} datatype={theme}>
          Coming <span>{date}</span>
        </h3>
        <div className={styles.countdown} datatype={theme}>
          <div className={styles.card}>
            <p className={styles.timer}>{timerDays}</p>
            <p className={styles["time-unit"]}>days</p>
          </div>

          <div className={styles.card}>
            <p className={styles.timer}>{timerHours}</p>
            <p className={styles["time-unit"]}>hours</p>
          </div>

          <div className={styles.card}>
            <p className={styles.timer}>{timerMinutes}</p>
            <p className={styles["time-unit"]}>min</p>
          </div>

          <div className={styles.card}>
            <p className={styles.timer}>{timerSeconds}</p>
            <p className={styles["time-unit"]}>sec</p>
          </div>
        </div>
      </div>
    </>
  );
}
