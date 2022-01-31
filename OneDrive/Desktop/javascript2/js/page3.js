function function1() {
   
const person={
    name:'Person1',
    address:'Sangola maharashtra',
    city:'Sangola',
    age:21,
    phone:7498577134

}
//Get all the keys of an object
console.log(person)
const keys=Object.keys(person)
console.log(keys)

//Iterate over the array and get all the values
for(const key of keys){
    console.log(`key=${key}`)
}

//Iterate over the array and get all the values(With value)
for(const key of keys){
    console.log(`key=${key} values=${person[key]}`)
}

}
function1()

function function2() {
   
    const person={
        name:'Sandeep',
        address:'Sangola maharashtra',
        city:'Sangola',
        age:21,
        phone:7498577134
    
    }
    console.log('Information about the name of the person')
    console.log(Object.getOwnPropertyDescriptor(person,'name'))
}
function2()