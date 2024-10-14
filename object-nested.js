/* const collage = {
    name: 'VNC',
    class: ['11', '12'],
    events: ['Science Fair', 'Book Fair', 'Bijoy Dibosh'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
};

collage['unique']['result']['merit']= "top top top"
console.log(collage.events[2] = 'Mothaer')
console.log(collage.events)
console.log(collage)
// console.log(collage)

delete collage.events;
console.log(collage) */

const collage = {
    name: 'VNC',
    class: ['10', '11', '12'],
    events: ['Science Fair', 'Bijoy Dibosh', '21 Feb'],
    speciality: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

delete collage.class;
console.log(collage)

// console.log(collage.speciality)
// collage.speciality.result.gpa = 2;
// console.log(collage.speciality.result.gpa)
collage.speciality.result.merit = 'top top top most';
collage.events[2] = 'Valentine Day';
// console.log(collage.speciality.result)

delete collage.class;
// console.log(collage);