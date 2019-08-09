import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../Pricing/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import plansPricing from '../data/pricing-plan.json';
import user from '../data/user.json';
import stats from '../data/stats.json';
import transactions from '../data/transaction.json';

import styles from './App.module.css';

const App = () => (
  <div className={styles}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={plansPricing} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
