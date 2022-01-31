const num =100
console.log(`number=${num},type=${typeof num}`)
function function1(){
    console.log('Inside function')
   console.log(this)
}
function1()

function function2(){
   console.log(`num=${this.num}`)
}
function2.call({num: num})

// 1.07 min