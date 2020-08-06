import Card from "./Card";
import styles from "../styles/History.module.scss";

const History = ({ cards, removeExpanse }) => {
  return (
    <div>
      <h2 className={styles.header}>History</h2>
      <div className={styles.border}></div>
      {cards.map((card) => (
        <Card {...card} key={card.id} removeExpanse={removeExpanse} />
      ))}
    </div>
  );
};

export default History;
