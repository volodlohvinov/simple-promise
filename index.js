const promise = new Promise((resolve) => {
  setTimeout(function () {
    resolve("Ready");
  }, 2000);
});
promise.then((result) => {
  alert(result);
  console.log(result);
});
