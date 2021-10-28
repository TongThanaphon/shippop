const SHIPPOP = 'Shippop'

const greeting = (firstName, lastName) => {
    if (firstName === SHIPPOP) {
        return 'Best Online Shipping Platform'
    } else {
        return `Hello Shippop, My name is ${firstName} ${lastName}`
    }
}

console.log(greeting('Tong', 'Thanaphon'))
console.log(greeting('Shippop', 'Hello'))