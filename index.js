function perfectNumber (n) {
  let x = 0
  for(let i = 1; i <= n / 2; ++i ){
    if(n % i === 0) {
      x += i
    }
  }
    const result = x !== 0 && x === n
  
    result ?  console.log(`El numero ${n} es perfecto`) : console.log(`El numero ${n} no es perfecto`)
}

perfectNumber(6)
