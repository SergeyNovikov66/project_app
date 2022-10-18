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

// function foo(start) {
  
//   let stopInterval = setInterval(() => {
//     start++;
//     if (start ===60) {
//       clearInterval(stopInterval);
//     }
//     console.log('Hello, World!', start);
//   },1000);

// }

// foo(0);

function myClock() {
      setInterval(function() {
      var date = new Date();

      var hours = date.getHours();
      var minutes = date.getMinutes();
      var second = date.getSeconds();

      if(hours <10) {
        hours = "0" + hours;
      }
      if(minutes <10) {
        minutes = "0" + minutes;
      }
      if(second <10) {
        second = "0" + second;
      }

      var clock = hours + ":" + minutes + ":" + second;
      
      console.log(clock);
   }, 1000);
}
myClock();