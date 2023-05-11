// creating a function to handle our promise
const handlePromise = (resolve, reject) => {
    let userExists = true;

    if (userExists) {
        // use the resolve function from the .then()
        resolve({ message: "Completed", special: 20 });
    } else {
        // use the reject function when there is an error in .catch()
        reject({ message: "Failed", special: 0 });
    }
};

// create a new promise called examplePromise
let examplePromise = new Promise(handlePromise);

// ths function runs as the resolve function above (line 7)
const handleResolve = (msg) => {
    console.log(
        `The Promise was resolved here is the message: ${JSON.stringify(msg)}`
    );
    // if we return a value we can pass the value to the next .then()
    return { ...msg, message: "This is an updated value" };
};

// ths function runs as the reject function above (line 10)
const handleReject = (msg) => {
    console.error(
        `The Promise was rejected here is the message: ${msg.message}`
    );
};

// if we use asecond .then() we can use the value
//returned from the first .then()'s function
const handleResolveDifferently = (msg) => {
    console.log(`I'm Special: ${JSON.stringify(msg)}`);
};

// using the .then syntax to use the above
// functions with the above promise and handle
// both resolving the promise or rejecting the promise
examplePromise
    .then(handleResolve)
    .then(handleResolveDifferently)
    .catch(handleReject);

// Promise.all

const prom1 = Promise.resolve(3);
const prom2 = 42;
const prom3 = new Promise((res, _) => {
    setTimeout(res, 2500, "Foo");
});

Promise.all([prom1, prom2, prom3]).then((values) => {
    console.log(values);
});
