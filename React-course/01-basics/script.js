// react js : declarative(jsx)
function MyComponent({ name }) {
    return <h1>My name is {name}</h1>
}

// vanila JS : imparative
function MyNameInH1(name) {
    //virtual DOM
    const h1 = document.createElement("h1")
    h1.innerText = `my name is ${name}`
    return h1
}