// const image = new Image();
// let image = document.createElement('img')
let image = document.getElementsByTagName('img')[0]
// let url = "/favicon.ico"
// // image.onload = function () {
// //   console.log('success')
// // };

// // image.onerror = function () {
// //   console.log('error')
// // };

// image.src = url;

function loaded() {
    console.log('loaded')
}

if (image.complete) {
    loaded();
} else {
    // image.addEventListener('load', loaded);
}
  // document.body.appendChild(image);
