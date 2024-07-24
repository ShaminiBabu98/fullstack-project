var getGuesser = function () {
    var secret = 8;
  
    return function (userNumber) {
      if (userNumber === secret) {
        console.log("Well done!");
      } else {
        console.log("Unlucky, try again.");
      }
    };
  };
  
  var guess = getGuesser();
  
  