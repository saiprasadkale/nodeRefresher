//performance async await vs Promise.
const makeApiCall = (time) => {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This API executed in: " + time);
      }, time);
    });
};
const apiRequests = [makeApiCall(1000), makeApiCall(5000), makeApiCall(2000)];

// Promise.all(apiRequests).then((values)=>{
//     console.log(values);
// })

(async function () {
  for (let request of apiRequests) {
    console.log(await request());
  }
})();
