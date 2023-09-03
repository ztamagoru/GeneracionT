function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let fizz = new Boolean(i % 3 == 0);
        let buzz = new Boolean(i % 5 == 0);
        
        if (fizz == true && buzz == true) {
            console.log(i, "fizzbuzz");
        }
        else if (fizz == true) {
            console.log(i, "fizz");
        }
        else if (buzz == true) {
            console.log(i, "buzz");
        }
        else {
            console.log(i);
        }
    };
};

document.addEventListener('DOMContentLoaded', fizzbuzz())