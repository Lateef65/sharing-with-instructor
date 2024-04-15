function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
const age = parseInt(prompt("Enter your age: "));
const ticketPrice = calculateTicketPrice(age);
console.log("The price of your movie ticket is $" + ticketPrice);


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = parseInt(prompt("Enter the value of n: "));
console.log("The " + n + "th Fibonacci number is:", fibonacci(n));


function isPalindrome(s) {
    s = s.toLowerCase().replace(/\s/g, "");
    if (s.length <= 1) {
        return true;
    } else if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return isPalindrome(s.slice(1, -1));
    }
}

// Example usage:
const string = prompt("Enter a string: ");
if (isPalindrome(string)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
