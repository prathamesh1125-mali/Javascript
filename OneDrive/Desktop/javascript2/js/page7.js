//constructor function
/*function Person(name,address,phone){
    this.name=name
    this.address=address
    this.phone=phone
}
const p=new Person('Prathamesh','Ekhatpur road shikshak colony sangola','7498577134')
console.log(p) */

class Person1{
    //Parameterized constructor
    constructor (name,address,phone,age){
        this.name=name
        this.address=address
        this.phone=phone
        this.age=age
    }
    //method
     canVote() {
        if(this.age>=18){
            console.log(`${this.name} is eligible for vote`)
        }
        else{
            console.log(`${this.name} is not eligible for vote`)
        }
    }
}
const p2=new Person1('Prathamesh','Ekhatpur road shikshak colony sangola','7498577134','21')
const p3=new Person1('Sarthak','Ekhatpur road shikshak colony sangola','7498577135','16')
 console.log(p2)
 console.log(p3)
 p2.canVote()
 p3.canVote()