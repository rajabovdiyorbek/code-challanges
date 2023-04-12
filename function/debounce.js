function debounce(func, delay) {
    let timeoutId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  }
  
  const myFunc = debounce(function() {
    console.log("Hello!");
  }, 1000);
  
  myFunc(); // вызовет функцию через 1 секунду
  myFunc(); // игнорируется
  myFunc(); // игнорируется
  // через 1 секунду после последнего вызова
  // функция будет вызвана и выведет "Hello!" в консоль