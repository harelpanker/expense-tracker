import { useState } from "react";
import uuid from "react-uuid";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Balance from "../components/Balance";
import History from "../components/History";
import Form from "../components/Form";

export default function Home() {
  const initialCards = [
    { id: uuid(), name: "Billa", amount: 75 },
    { id: uuid(), name: "PC", amount: -50 },
  ];
  // STATE
  const [cards, setCards] = useState(initialCards);

  // GRAND TOTAL
  const amounts = cards.map((card) => card.amount);
  const total = amounts.reduce((total, item) => (total += item), 0);
  // NEGETIVE
  const expanse = cards.filter((card) => card.amount < 0);
  const amountsMinus = expanse.map((card) => card.amount);
  const totalMinus = amountsMinus.reduce((total, item) => (total += item), 0);
  // INCOME
  const income = cards.filter((card) => card.amount > 0);
  const amountPlus = income.map((card) => card.amount);
  const totalPlus = amountPlus.reduce((total, item) => (total += item), 0);

  // ADD EXPANSE
  const addExpanse = (newExpance, amountNum) => {
    setCards([...cards, { id: uuid(), name: newExpance, amount: +amountNum }]);
  };
  // REMOVE EXPANSE
  const removeExpanse = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Expense Tracker</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Expense Tracker</h1>
          <Balance
            total={total}
            totalMinus={totalMinus}
            totalPlus={totalPlus}
          />
          <History cards={cards} removeExpanse={removeExpanse} />
          <Form addExpanse={addExpanse} />
        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href='https://www.panker.io/'
          target='_blank'
          rel='noopener noreferrer'>
          Made by{" "}
          <img src='/panker.svg' alt='Panker Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
