// function to check if the string is a palindrome
function palindrome(string) {

    for(let i=0; i< string.length/2; i++){
        if(string[i] !== string[string.length -1 -i]) return `${string} is not a Palindrome`;

    }
    return `${string} is a palindrome`
}
  
console.log(palindrome('arara'))