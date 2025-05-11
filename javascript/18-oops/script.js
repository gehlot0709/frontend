class account {
    constructor(value1, value2, value3, value4) {
        this.id = value1
        this.amount = value2
        this.holder = value3
        this.branch = value4
    }
    print() {
        console.log(`id: ${this.id}`)
        console.log(`amount: ${this.amount}`)
        console.log(`holder: ${this.holder}`)
        console.log(`branch: ${this.branch}`)
    }
    transfer(amount, acc) {
        this.amount -= amount
        acc.amount += amount
    }
}


const a1 = new account(1, 1000, "pratham", "satelite")
const a2 = new account(1, 500, "Dharmesh", "Prahaldnagar")

console.log(a1.print());
console.log(a2.print());

a1.transfer(500, a2)

console.log(a1.print());
console.log(a2.print());