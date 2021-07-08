// FIZZBUZZ 

for (i=1;i<=100;i++){
  if ((i%3==0)&&(i%5==0)){
    console.log("FizzBuzz")
  }
  else if(i%3==0){
    console.log("Fizz")
  }
  else if (i%5==0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
}

//PALINDROME

s = "madam"
s1 = ""
for ( t of s ){
  s1 = t + s1}
console.log(s1)
  if (s1 == s){
   console.log("Palindrome")    
 }
 else{
   console.log("Not a palindrome")
 }

