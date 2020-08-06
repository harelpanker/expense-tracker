import styles from "../styles/Balance.module.scss";

const Balance = ({ total, totalMinus, totalPlus }) => {
  return (
    <>
      <h2 className={styles.header}>Your balance</h2>
      <div className={styles.border}></div>
      <h3
        className={styles.total}
        style={{ color: total < 0 ? "#dd2c00" : "#21bf73" }}>
        €{total.toFixed(2)}
      </h3>
      <div className={styles.incomeExpense}>
        <div>
          <h5>Income</h5>
          <p style={{ color: "#21bf73" }}>€{totalPlus}</p>
        </div>
        <div className={styles.divider}></div>
        <div>
          <h5>Expense</h5>
          <p style={{ color: "#dd2c00" }}>€{totalMinus * -1}</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
