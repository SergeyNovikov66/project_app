// function foo() {
//   const times = 60*60*24;
//   for (let i = 0; i < times; i++) {
//     setTimeout(() => {
//       console.log('Hello, World!' + ' ' + (i+1) + ' сек');
//     }, i * 1000 );
//   }
// }
// foo();
// console.log("Counter is " + count);

function foo(start) {
  
  let stopInterval = setInterval(() => {
    start++;
    if (start ===60) {
      clearInterval(stopInterval);
    }
    console.log('Hello, World!', start);
  },1000);

}

foo(0);