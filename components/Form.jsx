import { useState } from "react";
import styles from "../styles/Form.module.scss";

const Form = ({ addExpanse }) => {
  const [expanseName, setExpanseName] = useState("");
  const [expanseSum, setExpanseSum] = useState(0);

  const newNameVal = (e) => setExpanseName(e.target.value);
  const newSumVal = (e) => setExpanseSum(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpanse(expanseName, expanseSum);
    setExpanseName("");
    setExpanseSum(0);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <h2 className={styles.header}>Add new transaction</h2>
      <div className={styles.border}></div>
      <div className={styles.inputLabel}>
        <label htmlFor='text'>Text</label>
        <input
          value={expanseName}
          onChange={newNameVal}
          type='text'
          id='text'
          required
          placeholder='Enter text...'
        />
      </div>
      <div className={styles.inputLabel}>
        <label htmlFor='number'>
          Amount{" "}
          <span className={styles.span}>
            negative - expanse : positive - income
          </span>
        </label>
        <input
          required
          value={expanseSum}
          onChange={newSumVal}
          type='number'
          id='number'
        />
      </div>
      <button className={styles.submitBtn}>Submit Expanse</button>
    </form>
  );
};

export default Form;
