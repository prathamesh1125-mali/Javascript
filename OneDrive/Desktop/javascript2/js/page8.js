class Person1{
    constructor (firstName,lastName,address,phone,age){
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
        this.phone=phone
        this.age=age
    }
    get fullName(){
        return `${p1.firstName} ${p1.lastName}`
    }

    set fullName(value){
        const parts =value.split(' ')
        this.firstName=parts[0]
        this.lastName=parts[1]
    }
}
   
const p1=new Person1('Prathamesh','Mali','Ekhatpur road shikshak colony sangola','7498577134','21')
 console.log(p1)

 p1.fullName='Harshad Mehta'
 console.log(p1.fullName)