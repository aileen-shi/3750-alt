// Aileen Shi
// 6/15/24
// CPSC 3750
// Program Exam #1
// A

var prime = new Array();
var notPrime = new Array();
setInterval(timer, 5000);
const purple = "#a27bbd";
const orange = "#f2bc8d";

// Change color every 5 seconds
function timer() {
    const list1 = document.getElementById("prime");
    const list2 = document.getElementById("notprime");

    const style1 = getComputedStyle(list1);
    const style2 = getComputedStyle(list2);

    // Swap colors
    if (style1.backgroundColor === orange) {
        list1.style.backgroundColor = purple;
        list2.style.backgroundColor = orange;
    }
    else {
        list1.style.backgroundColor = orange;
        list2.style.backgroundColor = purple;
    }
}

// Helper function to check prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n == 2 || n == 3) {
        return true;
    }
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % 1 == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

// Function to generate lists 
function GenLists() {
    prime = [];
    notPrime = [];

    // Get number from text field
    max = parseInt(document.theform.newnumber.value);
    // Check numbers 1 - max
    for (let i = 1; i <= max; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
        else {
            notPrime.push(i);
        }
    }
    // Show list
    document.theform.primelist.value = prime.join("\n");
    document.theform.notprimelist.value = notPrime.join("\n"); 
}

// Prime sum
function PrimeSum() {
    sum = 0;
    for (let i = 0; i < prime.length; i++) {
        sum += prime[i];
    }
    document.getElementById("primesum").textContent = sum;
}

// Not prime sum
function NotPrimeSum() {
    sum = 0;
    for (let i = 0; i < notPrime.length; i++) {
        sum += notPrime[i];
    }
    document.getElementById("notprimesum").textContent = sum;
}