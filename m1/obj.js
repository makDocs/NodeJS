const person = {
    name: 'Mohammad ali',
    age: 21,
    greet(productNum) {
        console.log(`Hi Mr. ${this.name} .  You Have ${+productNum} product .`)
        /*
            + : اگر استرینگ بود به عدد تبدیل می کنه
        */
    },
    greetFunc: function () {
        console.log(`Hello Mr. ${this.name} .`)
    },
    allowFunc: () => {
        console.log(`Hello mr ${this.name}`); // undifined
        /*
            this be global scope and global node Runtime Scope 
        */
    }
}

person.greet("5");
person.greetFunc();
person.allowFunc();