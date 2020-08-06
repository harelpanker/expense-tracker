import style from "../styles/Card.module.scss";

const Card = ({ name, amount, id, removeExpanse }) => {
  const handleRemove = () => removeExpanse(id);
  return (
    <div
      className={style.card}
      style={{
        borderRight: `3px solid ${amount < 0 ? "#dd2c00" : "#21bf73"}`,
      }}>
      <p>{name}</p>
      <div className={style.right}>
        <p>{amount}</p>
        <img onClick={handleRemove} src='/delete-icon.svg' alt='Delete' />
      </div>
    </div>
  );
};

export default Card;
