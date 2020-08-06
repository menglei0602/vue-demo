// try {
//     // setTimeout(() => {
//         throw new Error('1')
//     // }, 1000);
// } catch (e) {
//     console.error(e.Error)
// }
try {
  const promise = new Promise(function (resolve, reject) {
    resolve('ok')
    setTimeout(function () { throw new Error('test') }, 0)
  })
  promise.then(function (value) { console.log(value) })
} catch (error) {
  console.log(1)
}
