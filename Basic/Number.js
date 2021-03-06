/* Math.sign(num)
If the num is positive, returns 1.
If the num is negative, returns -1.
If the num is positive zero, returns 0.
If the num is negative zero, returns -0.
Otherwise, NaN is returned.
*/

//-------------------------- reverse the number 
const reverseNum=(num)=>{
    let reversedNum=parseInt(num.toString().split('').reverse().join(''))*Math.sign(num)
    // console.log(reversedNum)
    
}
reverseNum(-15)

//------------------------ classical fizzbuzz problem
// Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.

const fizzbuzz=(number)=>{
    for (let i=1; i<=number; i++){
        // console.log(i)
        if(i%3===0 && i%5===0)console.log('fizzbuzz')
        else if(i%3 ===0) console.log('fizz')
        else if(i%5===0) console.log('buzz')
        else console.log(i)
    }
}
fizzbuzz(35)

//--------------------------- filter
function filter_list(list) {
    const result = list.filter(word => word >= 0);
   console.log(result)
  }

filter_list([1,2,'a','b']) == [1,2,'a','b']

//--------------------------- sum up the range from a to b
function getSum( a,b ){
   let sum=0
   if(b>a){
        for(let i = a; i <= b; i++){
            sum+=i
        }
   }
   else if(b<a){
        for(let i = b; i <= a; i++){
            sum+=i
        }
   }
   else {
       return a
   }
   console.log(sum)
}

getSum(0,-1) //-1
getSum(0,1) //1
getSum(-1,2) // 2
getSum(1,1) //1


//-------------------------------- check pin number
function validatePIN (pin) {
    let resu=pin.match(/[^0-9]/g)
    if(resu){
        return false
    } 
    if(pin.length==4 || pin.length==6){
        return true
    } else return false
}
console.log(validatePIN("-1234") ) //false
console.log(validatePIN("-1.234") ) //false
console.log(validatePIN("a123") ) //false
console.log(validatePIN("1") ) //false
console.log(validatePIN("1234") )  //true
console.log(validatePIN("123456") ) //ture


//--------------------- (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k 
function digPow(n, p){
    var digits = n.toString().split('');
    let result=0
    for (let i=0; i<digits.length;i++){
      let pow_num=Math.pow(digits[i],(p+i))
       result+=pow_num
    }
    let num=result/n
    if(result===n*num){
      return num
    }else return -1
}
  
console.log(digPow(89, 1)) // 1
console.log(digPow(92, 1)) // -1
console.log(digPow(46288, 3)) // 51
  
//----------------------- split number: 3^3 + 7^3 + 1^3=371
function narcissistic(value) {
    let n=value.toString().length
    let number = value.toString().split('')
    let result =0 // set the initial value=0

    for (let i of number){
       result += Math.pow(i, n)
    }
    if(value==result) return true
    else return false
  }

console.log(narcissistic( 7 ))
console.log(narcissistic( 371 ))

  
// -------- Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
function SeriesSum(n)
{
  let result=1
  let reverage=1
  for(let i=1;i<n;i++){
    reverage+=3
    result+=1/reverage
  }
  // method2
  // for (var s = 0, i = 0; i < n; i++) {
  //   s += 1 / (1 + i * 3)
  // }
  return result.toFixed(2)
}

console.log(SeriesSum(2)) //1.25
console.log(SeriesSum(3)) //1.39

// ----------- no 5 : 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
function dontGiveMeFive(start, end)
{
  let count=0
  for(let i=start; i<=end;i++){
    // convert to string, then check included or not
    if(!(i + '').includes('5')){
      count++
    }
  }
  return count
}

console.log(dontGiveMeFive(1,9)) //8
console.log(dontGiveMeFive(4,17)) //12


