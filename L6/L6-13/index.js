function withdraw(clients, balances, client, amount) {
  let i = clients.indexOf(client);
  if (amount > balances[i]) {
    return -1;
  }
  balances[i] -= amount;
  return balances[i];
}
