function function1(){
    console.log('inside funcyion')
}
console.log(function1)
//direct function call
function1()

//Function alias
const myFunction3=function1
console.log(myFunction3)

//function2 is reference
//function is anonymous
const function2 =function(){
    console.log('inside funcyion 2')
}
console.log(function2)


//arrow function
const function3=()=>{
    console.log('inside funcyion 3')
}
console.log(function3)