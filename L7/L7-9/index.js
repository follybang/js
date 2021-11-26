'use strict';

const withdraw = (clients, balances, client, amount) => {
  const i = clients.indexOf(client);
  if (amount > balances[i]) {
    return -1;
  }

  return (balances[i] -= amount);
};

const clientsList = ['Ann', 'Jack', 'Buck'];
const balancesList = [1000, 11, 777];
console.log(withdraw(clientsList, balancesList, 'Ann', 200));
