const name = {
    name : 'Hridoy',
    class: 12,
    roll: 11,
    names:['Kamal', 'jmaal', 'namal', 'kamalla'],
    obj1:{
        name : 'papa',
        age: 222,
        roll: 24
    },
    'fav place' : ['Bandorban', 'Sylhet', 'Cox']

};

const propNames = 'roll';
name[propNames] = 121;

const sreni = 'class';
name[sreni] = 11;
// console.log(name)

// console.log(name['obj1']['name']);

// console.log(name['obj1']['roll'])
// name.obj1.name = 'Baba';
name['obj1']['name'] = 'baba';
// console.log(name['fav place'])
// name['class'] = 13;
// name['fav place'].push('japan')
// console.log(name);