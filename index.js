function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ready");
    }, 2000);
  });
}
delayedPromise().then((result) => {
  alert(result);
  console.log(result);
});
