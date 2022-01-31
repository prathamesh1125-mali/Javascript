console.log('Hello World....!!!')
//objecs
//-by using object literal
//-by using JSON syntax

function function1() {
    //creating new object
const person={
    name:'Person1',
    address:'Sangola maharashtra',
    phone:7498577134

}
console.log(`type of person =${typeof person}`)
console.log(person)
}
function1()


function function2() {
    //creating new object
const mobile={
    //key:value (String)
    model:'Nord2',
    company:'One plus',
    //key:value (object)
    configuration:{
    ram:'8GB',
    memory:'128GB',
    price:30000
    },
    //key:value (Array)
    features:['black colour','mat finish','Light weight'],
   //key:value (boolean)
    modelavailableinPune:true
   
}
console.log(`type of mobile =${typeof mobile}`)
console.log(mobile)
}
function2()

function function3(firstName,lastName,address,age){
    const Person1={
        firstName:firstName,
        lastName:lastName,
        address:address,
        age:age

    }
    console.log(Person1)
    
    // Shorthand
    const person2=
    {
      firstName,
      lastName,
      address,
      age
    }
    console.log(person2)
}
function3('Sachin','Tendulkar','Mumbai',50)

