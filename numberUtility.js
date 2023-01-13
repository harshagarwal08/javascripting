let input = 14
const checkPrime = (input) => {
    let isPrime = true;
    for (let it = 2; it < input/2; it++) {
        if (input % it == 0) {
            isPrime = false;
            break;
        }   
    }
    if(isPrime) console.log('Prime')
    else console.log('Not Prime')
}
const checkArmstrong = (input) => {
    let sum = 0;
    let temp = input;
    while (temp > 0) {
        let rem = temp % 10;
        sum += rem * rem * rem;
        temp = parseInt(temp / 10);
    }
    if (sum == input) console.log('Armstrong number');
    else console.log('Not an Armstrong number.');
}
checkPrime()
checkArmstrong()
// let functionInput = prompt('Prime or Armstrong?')
// if(functionInput.toLowerCase()==='prime') checkPrime();
// else if(functionInput.toLowerCase()==='armstrong') checkArmstrong(); 


