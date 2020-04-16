const hobbies = ['Watch TV', "Programming Node JS", "Programming", 'Game PS4'];

// 1 :

    for (const hobby of hobbies) {
        console.log(hobby)
    }

console.log('///////////////////////////////');
// 2 :

    console.log(hobbies.map(hobby => ("Hobby : " + hobby))); // this is array;


console.log('///////////////////////////////');
// 3 :
    hobbies.forEach(hobby => {
        console.log(hobby)
    });

console.log('///////////////////////////////');
/**
 * push
 * pop 
 * unshift : push in firs
 * shift : mesle pop
 * 
 */

hobbies.push('Mobile Game');

hobbies.unshift('Labtop Game');

hobbies.shift();

 console.log(hobbies)