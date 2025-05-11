class account {
    #data = "private"
    constructor(value1, value2, value3, value4, value5 = false) {
        this.id = value1
        this.amount = value2
        this.holder = value3
        this.branch = value4
        this.isadmin = value5 
    }

    getdata(){
        return this.#data
    }

    setdata(data) {
        if (this.isadmin) {
            this.#data = data
            return "Data set!"
        }
        return "Not authorized"
    }

    print() {
        console.log(`id: ${this.id}`)
        console.log(`amount: ${this.amount}`)
        console.log(`holder: ${this.holder}`)
        console.log(`branch: ${this.branch}`)
        return ""
    }
}

const a1 = new account(1, 1000, "pratham", "satelite", true)
const a2 = new account(1, 500, "Dharmesh", "Prahaldnagar")

console.log(a1.getdata()) // → "private"
console.log(a1.setdata("new secret info")) // → "Data set!"
console.log(a1.getdata()) // → "new secret info"
