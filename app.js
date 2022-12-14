let profileDataArgs = process.argv.slice(2, process.argv.length);

// const animalArray = ['dog', 'cat', 'your mom'];
// animalArray.push('cow, aka your mom again');
// console.log(animalArray);


const printProfileDataArgs = ProfileDataArgs => {
    profileDataArgs.forEach((item) => {
        console.log(item);
    });
};

printProfileDataArgs(profileDataArgs);