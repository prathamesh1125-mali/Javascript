function function1() {
    //creating new object
const person={
    name:'Person1',
    address:'Sangola maharashtra',
    phone:7498577134,

    //this:current object
    printInfo: function () {
        console.log('inside printInfo')
        console.log(this)
    }

}
//calling object method
person.printInfo()
}
//function1()
//<-------------------------------------------------->


function function2() {
    
const person={
    firstName:'Prathamesh',
    lastName:'Mali',
    address:'Sangola maharashtra',
    phone:7498577134,
    }
    // add new getter to get the full name
    Object.defineProperty(person,'fullName',{
        get: function () {
            return `${person.firstName} ${person.lastName}`
        }
    })

     // add new getter to get the full address using this keyword
     Object.defineProperty(person,'fullAddress',{
        get: function () {
            return ` ${person.address },${person.phone}}`
        }
    })
    console.log(`full name=${person.fullName}`)
    console.log(`full address=${person.fullAddress}`)
}


function2()


function function3() {
    //creating new object
const person={
    firstName:'Prathamesh',
    lastName:'Mali',
    name:'Person1',
    address:'Sangola maharashtra',
    phone:7498577134,

    }
    //add setter to update person's f
    Object.defineProperty(person,'fullName',{
        set:function(value){
            const parts = value.split(' ')
            this.firstName=parts[0]
            this.lastName=parts[1]
        }

    })
    console.log(person)
    person.fullName= 'Rahul Dravid'
    console.log(person)
}
function3()