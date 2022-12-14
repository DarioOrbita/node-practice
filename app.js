const profileDataArgs = process.argv.slice(2, process.argv.length);

// const animalArray = ['dog', 'cat', 'your mom'];
// animalArray.push('cow, aka your mom again');
// console.log(animalArray);


// const printProfileDataArgs = ProfileDataArgs => {
//     profileDataArgs.forEach(item => console.log(item));
// };

// printProfileDataArgs(profileDataArgs);
const [name, github] = profileDataArgs;
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Practice</title>
</head>
<body>
    <h1>${name}</h1>
    <h2>
        <a href="https://github.com/${github}">Github</a>
    </h2>

</body>
</html>
    `;
}

console.log(generatePage(name, github));