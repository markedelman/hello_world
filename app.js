console.log("Hello console")

// print hello world 10 times

function sayHello(n) {
    for (var i = 0; i < n; i++) {
        console.log('Hello world! ' + (i + 1) + ' time');
    }
}

// call the function
sayHello(10);