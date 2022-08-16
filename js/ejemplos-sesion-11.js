//Sesion 11 Programacion asincrona
//!Ejemplo1
function startProcess() {
  console.log("Start Phase 1. Wait one second...");
  setTimeout(function () {
    console.log("Phase 1 completed. Wait two seconds...");
    setTimeout(function () {
      console.log("Phase 2 completed. Wait three seconds...");
      setTimeout(function () {
        console.log("Phase 3 completed. Wait four seconds...");
        setTimeout(function () {
          console.log("Phase 4 completed.");
          // More asynchronous calls...
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
}

startProcess();
//*Ejemplo2
function addOne(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value + 1), 500);
  });
}

addOne(1)
  .then((result) => {
    console.log(result); // 2
    return addOne(result);
  })
  .then((result) => {
    console.log(result); // 3
    return Promise.reject("Oops!");
  })
  .catch((err) => {
    console.log(err); // Oops!
    return addOne(1);
  })
  .then((result) => {
    console.log(result); // 2
    return addOne(result);
  })
  .then((result) => console.log(result)); // 3
//!Reto1
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let totalPromises = promises.length;
    let promiseCollection = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          promiseCollection[i] = res;
          totalPromises--;
          if (totalPromises === 0) {
            resolve(promiseCollection);
          }
        })
        .catch(reject);
    }
    if (promises.length === 0) {
      resolve(promiseCollection);
    }
  });
}

function soon(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 1000);
  });
}

// Test cases
promiseAll([]).then((results) => {
  console.log("Expected result []: ", results);
});

promiseAll([soon(1), soon(2), soon(3)]).then((results) => {
  console.log("Expected result [1, 2, 3]: ", results);
});

promiseAll([soon(1), Promise.reject("X"), soon(3)])
  .then((results) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    console.log("Expected error X: ", error);
  });
// //*Reto2
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "Hello World";
}

function log() {
  wait()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

log();
//!Reto3

const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

const triggerActions = (count) => {
  let promiseCollection = [];
  let auxPromise = (actual) => {
    return new Promise(function (resolve) {
      processAction(actual, resolve);
    });
  };
  for (let i = 1; i <= count; i += 1) {
    promiseCollection.push(auxPromise(i));
  }
  Promise.all(promiseCollection)
    .then((texts) => {
      texts.forEach((text) => {
        console.log(text);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

triggerActions(10);
