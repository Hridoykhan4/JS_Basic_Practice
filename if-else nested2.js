const money = 240;

// if(money > 300){
//     console.log("You are rich!!!");
// }

// else{
//     if(money > 100){
//         console.log('Majhamajhi asos...');
//     }
//     else{
//         if(money > 0){
//             console.log('Eat Banana and gain energy');
//         }
//         else console.log('obostha kharap, mama');
//     }
// }

if(money > 400){
    console.log('You are rich');
}

else{
    if(money > 300){
        console.log('You are middle class');
    }
    else{
        if(money > 200){
            console.log('You are lower middle class');
        }
        else{
            if(money > 100){
                console.log('You are poor');
            }
            else{
                console.log('Fuck Off')
            }
        }
    }
}