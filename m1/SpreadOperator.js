const hobbies = ['Watch TV', "Programming Node JS", "Programming", 'Game PS4'];

const copyArray = hobbies.slice();

const copyArray2 = [...hobbies];

const objHobbies = {...hobbies};

console.log(objHobbies);
console.log(objHobbies[2]);

const toArr = (...arr)=>{
    return arr;
}
console.log(toArr(1,2,34,564,2))