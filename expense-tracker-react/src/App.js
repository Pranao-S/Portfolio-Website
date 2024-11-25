import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Investments } from './components/Investments';
import { TransactionsList } from './components/TransactionsList';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Investments />
        <TransactionsList />
      </div>
    </div>
  );
}

export default App;