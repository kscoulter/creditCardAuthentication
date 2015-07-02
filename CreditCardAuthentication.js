var authentication = function(creditCardNumber){
  creditCardNumber = creditCardNumber.toString();
  var creditArray = []
  //Split number into digits and put in array
  for (var i = 0; i < creditCardNumber.length; i++) {
    creditArray.push(creditCardNumber.charAt(i))
  }
  creditArray = creditArray.reverse();
  //Double every other number
  for (var j = 1; j < creditArray.length; j += 2) {
      creditArray[j] = creditArray[j]*2;
  }
  //Sum the array
  var sum = 0;
  for (var k = 0; k < creditArray.length; k ++){
    sum += creditArray[k]
  }
  //Check if divisible by 10
  if (sum % 10 === 0){
    return true;
    console.log(Yay!)
  }
  else {
    return false;
  }
}

authentication(38520000023237)
