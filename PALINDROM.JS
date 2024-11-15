// palindrom check exercice : 
function isPalindrome(str) {
   
    function cleanString(s) {

        return s.replace(/[^a-z0-9]/gi, "").toLowerCase();  //REMOVE THE NON ALPHABET CHARACTERS
    }

    function check(s, start, end) {
        
        if (start >= end) return true; // if the start and the end meet then its palindrome 
   
        if (s[start] !== s[end]) return false;  // Check if characters at the current pointers match
  
        return check(s, start + 1, end - 1); // Move pointers inward and continue checking
    }

    const cleanedString = cleanString(str);    // Clean the input string

    return check(cleanedString, 0, cleanedString.length - 1); 
}
console.log(isPalindrome("redder"));
// power exercice :
function power(x, n) {
    if (n === 0) return 1; // formule
  
    if (n < 0) return 1 / power(x, -n); // if n is negative
  
    return x * power(x, n - 1); //recrusive case
  }
console.log(power(2, 3));

// fibonacci exercice :
  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));  

// clothing advice exercice

function getClothingAdviceIfElse(temp, isRaining) {
    let advice = ""; // Initialize an empty string to build advice

    if (temp <= 5 ) {
        advice = "Wear a winter coat and gloves";
    } else if (temp <= 15 && temp>5) {
        advice = "Wear a warm sweater and a jacket";
    } else if (temp <= 25 && temp>15) {
        advice = "Wear a long-sleeve shirt or light sweater";
    } else if (temp >25) {
        advice = "Wear light clothing like a T-shirt and shorts";
    }

    if (isRaining) {
        advice += ", and carry an umbrella or wear waterproof shoes";
    }
    return advice;
}
const temp = parseInt(prompt("Enter the current temperature (°C):"));
const isRaining = prompt("Is it raining? (yes or no)").toLowerCase() === "yes";
console.log(`Clothing advice (if-else): ${getClothingAdviceIfElse(temp, isRaining)}`);
console.log(`Clothing advice (switch): ${getClothingAdviceSwitch(temp, isRaining)}`);


  