const numbers = [1,2,3,4,5,6]

//콜백이 참인 조건을 만족하는 묘소들만 추출
const evenNumbers = numbers.filter(num=>num%2==0)
console.log(evenNumbers)

const users = [
    {name : '세바스찬', age: 25},
    {name : '셰인', age: 30},
    {name : '샘', age: 17},
]
const adults = users.filter(user=>user.age>=19)
console.log(adults)