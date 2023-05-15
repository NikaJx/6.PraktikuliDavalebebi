//დავალება 1

// ამ დავალების კითხვა ვერ გავიგე ცოტა და იმედია ამას ითხოვდა

const stringFunc = (string, valueToReplace, valueToReplaceWith) => {
    return string.indexOf(valueToReplace) === -1 
      ? string
      : string.split(valueToReplace).join(valueToReplaceWith)
  }

stringFunc('gamarjoba', 'word', 'hello');

//დავალება 2

const titleCase = (str) => str.split(" ").map(el => el.toUpperCase()).join(" ");
console.log(titleCase("xvicha kvaratskelia"));


//დავალება 3

const users = [
    {
        name: 'Lasha', 
        age: 30
    }, 
    {
        name: 'Saba', 
        age: 20
    },
    {
        name: 'Anna',
        age: 19
    }
];

const sortFunc = (users) => {
    let userSort =  users.sort((a, b) => a.age - b.age);

    console.log(userSort);
}

sortFunc(users);