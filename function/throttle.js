function throttle(func, delay) {
    let isThrottled = false;
    let args;
    let context;
  
    function wrapper() {
      if (isThrottled) {
        args = arguments;
        context = this;
        return;
      }
  
      isThrottled = true;
      func.apply(this, arguments);
  
      setTimeout(() => {
        isThrottled = false;
        if (args) {
          wrapper.apply(context, args);
          args = null;
          context = null;
        }
      }, delay);
    }
  
    return wrapper;
  }
  
  const myFunc = throttle(function() {
    console.log("Hello!");
  }, 1000);
  
  myFunc(); // вызовет функцию сразу
  myFunc(); // игнорируется
  myFunc(); // игнорируется
  // через 1 секунду после первого вызова
  // функция снова будет вызвана и выведет "Hello!" в консоль
  