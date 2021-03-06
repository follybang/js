export class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('No enough funds');
      return;
    }

    this.#balance -= amount;
  }

  balance() {
    return this.#balance;
  }
}

const test = new Wallet();

console.log(test.balance());
