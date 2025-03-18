let instructor ={
    firstName :"manikandan",
    isInstractur: "true",
    favoriteNumber: [1,2,3,4]
}

//entire object 
console.log(Object.entries(instructor));
//keys and values
console.log(Object.keys(instructor),Object.values(instructor));
//try to find key is present or not
console.log(instructor.hasOwnProperty("firstName"));