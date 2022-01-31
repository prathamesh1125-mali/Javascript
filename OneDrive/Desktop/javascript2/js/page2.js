function function1(){
    const person1={
        firstName:'MahendraSingh',
        lastName:'Dhoni'
    }
    console.log(person1)

    //Accessing the properties using dot (.) syntax
    console.log('.....USING DOT SYNTAX.....')
    console.log(`firstName=${person1.firstName}`)
    console.log(`lastName=${person1.lastName}`)

     //Accessing the properties using dot [] syntax
     console.log('.....USING [].....')
     console.log(`firstName=${person1 ['firstName']}`)
     console.log(`lastName=${person1['lastName']}`)
}
function1()

function function2(){
    const person1={
        firstName:'MahendraSingh',
        lastName:'Dhoni',
    }
    console.log(person1)

    //Add new property using (.) syntax
    console.log('.....USING DOT SYNTAX.....')
    person1.company='Dream 11',
    person1.city='Ranchi'
    console.log(person1)

    //Add new property using [] syntax
    console.log('.....USING [].....')
    person1['company']='Dream 11'
    person1['city']='Ranchi'
    console.log(person1)

}
function2()