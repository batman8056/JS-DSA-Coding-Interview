function validAnagram(str1,str2){
    // Convert strings to arrays of characters
    str1=  str1.split('')
    str2=  str2.split('')
    if(str1.length !== str2.length){
        return false;
    }
    for(let char of str1){
        // Find the index of the character in the second array
        let present = str2.indexOf(char)
        if(present === -1){
            return false
        }
        console.log(str2)
        // Remove the character from the second array
        str2.splice(present,1)
    }
    return true;
}
console.log(validAnagram("str", "rst")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("apple", "pale")); // false