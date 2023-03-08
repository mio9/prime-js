const size = 2000000
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

for (let i = 34; true; i++) {
    for (let n = 0; n < primes.length; n++){
        let checkingPrime = primes[n]
        let halfMaxPrime = Math.sqrt(i)
        if (i%checkingPrime==0){
            break
        } else if (checkingPrime< halfMaxPrime){
            continue
        }
        primes.push(i)
        if (primes.length%50000==0){
            console.log(primes.length)
        }
        break
    }
    if (primes.length > size-1){
        break
    }
}
console.log(primes.slice(size-5))