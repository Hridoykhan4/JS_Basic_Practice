const age = 10;
const school = 'Mafia';
const isPassed = true;
let isDeveloper;
const subjects = ['Bangla', 'English', 'Math'];

const bottle = {
     brand : 'Apple',
     price: 12, 
     color:'white',
     'fav bottle': ['Jamal', 'Kamal', 'Namal', 'Hannan'],
     born: {
        country : 'America',
        desh : 'Bangladesh'
     }
    };
   
    const add = 'price';
    bottle[add] = 11;
    bottle['color'] = 'black white green'

    // console.log(bottle)
    // const company = bottle['brand'];
    // console.log(company)

    const jonmo = 'born';
    bottle[jonmo]['country'] = 'Malaysia';
    // console.log(bottle)



    const person = {
        name: 'sadr uddin',
        salary: 25000,
        married: true,
        profession: 'developer',
        age: 24,
        'fav places': ['Bandorban', 'Cumilla', 'Dhaka', 'Sylhet']
    };

    const keyName = 'married';
    // console.log(person[keyName])

    // const income = person.salary;
    // console.log(income)

    // Dot notation
    const save = person.name;
    // console.log(save);

    // Bracket Notation
    // console.log(person['salary'])
    // console.log(person["fav places"])

    person.salary = 40000;
    person['age'] = 30;

    const provv = person['profession'];
    // console.log(provv)
    

    // console.log(person)



    person['fav places'] = ['Maldives', 'JamalKhan', 'Switzerland']

    // console.log(person);

    // const prop = 'profession';
    // person[prop] = 'Devops';
    // console.log(person)


    // person['profession'] = 'devops';

    const keyValue = 'salary';
    // console.log(person[keyValue])

    const key = 'profession';
    person[key] = 'devops'

    // console.log(person)