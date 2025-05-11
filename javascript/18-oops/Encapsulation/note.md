🛡️ What is Encapsulation?
Encapsulation means hiding the internal details of an object and only showing the necessary parts.

Think of it like a TV remote:
You press buttons (public), but you don't need to know how the wires inside work (private).

💡 Why Use Encapsulation?
To protect data from being changed directly.

To make the code easier to manage and debug.

To make objects self-contained and secure.

example :- 
class Person {
  #name; // private property (using #)

  constructor(name) {
    this.#name = name;
  }

  getName() {  // public method
    return this.#name;
  }

  setName(newName) {  // public method
    if (newName.length > 0) {
      this.#name = newName;
    }
  }
}

const p1 = new Person("Alice");
console.log(p1.getName()); // Alice

p1.setName("Bob");
console.log(p1.getName()); // Bob

console.log(p1.#name); // ❌ Error: private field
