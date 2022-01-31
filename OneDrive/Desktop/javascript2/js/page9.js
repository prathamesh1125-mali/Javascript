class Person{
    constructor(name,address){
        this.name=name
        this.address=address
    }
    PrintInfo(){
        console.log(`name=${this.name}`)
        console.log(`address=${this.address}`)
    }
}
//Player class gets inherited from person class
class Player extends Person{
    constructor(name,address,sport,medal){
        super(name,address)
        this.sport=sport
        this.medal=medal
    }
    //method has overriden the PrintInfo()
    PrintInfo(){
        super.PrintInfo()
        console.log(`sport=${this.sport}`)
    }
} 
//const p1=new Person('Prathamesh','sangola')
const p2=new Player('Prathamesh','Mali','football')
//console.log(p1)
//console.log(p2)
//p1.PrintInfo()
p2.PrintInfo()