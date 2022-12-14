let profileDataArgs = process.argv.slice(2, process.argv.length);

// const animalArray = ['dog', 'cat', 'your mom'];
// animalArray.push('cow, aka your mom again');
// console.log(animalArray);


const printProfileDataArgs = ProfileDataArgs => {
    for (let i = 0; i < profileDataArgs.length; i++) {
        
        console.log(profileDataArgs[i]);
        
    }
};

printProfileDataArgs(profileDataArgs);