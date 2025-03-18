//make object to return
// loop over string, for each charcter...
    //if the char is a number/letter AND is a key in object, add one to count
    //if the char is a number/letter AND not in object, ad it to object and set value to 1
    //if character is something else (space, period, etc,,) don't do anything
//return object at end


function charCount(str){
    let result = {}; // Make object to return

    for (let char of str) {
        // Convert character to lowercase to count letters case-insensitively
        char = char.toLowerCase();

        // Check if the character is a letter or number using regex
        if (/[a-z0-9]/.test(char)) 
            // {
            // If character is already a key, increase the count
            result[char] = ++result[char] || 1;
            //     if (result[char]) {
            //         result[char]++;
            //     } else {
            //         // If not, initialize it to 1
            //         result[char] = 1;
            //     }
            // }
    }

    return result; // Return object at the end

}

console.log(charCount("do Something My boy!, number 1"))