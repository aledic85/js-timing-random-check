function casualNumbers() {
  var rnd1 = [];
  for (var i = 0; i < 2 ; i++) {
    var random = Math.floor(Math.random()*100) + 1;
    alert(random);
    rnd1.push(random)
  }
  console.log(rnd1);
  return rnd1;
}

function isPresentNumber(elem, arr) {
  var finded = false
  for (var i = 0; i < arr.length; i++) {
    if (elem == arr[i]) {
      finded = true;
    }
  } return finded;
}

function usersNumber() {
  for (var i = 0; i < rnd.length; i++) {
    var elemNumber = prompt("Dimmi i numeri: ");
  }
  if (isPresentNumber(elemNumber, rnd) == true) {
    alert("Hai vinto il primo round!");
    var newNumbers = askNumbers(3);
    setTimeout(tellYourNumbers, 5000, 3, newNumbers);
  } else {
    alert("Hai perso!");
    return;
  }
}

function askNumbers(n) {
    var newNumbers = [];
    for (var i = 0; i < n; i++) {
      x = prompt("Dammi un numero:")
      newNumbers.push(x);
    };
    return newNumbers;
}

function tellYourNumbers(n, newNumbers) {
  var yourNumbers = [];
  for (var i = 0; i < n; i++) {
    var ynbr = prompt("Adesso ridimmi i numeri di prima:")
    yourNumbers.push(ynbr)
  }
  var comp = arrComparison(yourNumbers, newNumbers)
  if (comp == true) {
    alert("Secondo round vinto!");
    if (n < 4){
      var newNubers = askNumbers(n+1);
      setTimeout(tellYourNumbers, 6000, n+1, newNumbers);
    } else {
      alert("Hai vinto il gioco!")
    }
  } else {
    alert("Hai perso!");
    return;
  }
}

function arrComparison (arr1, arr2) {
  var finded = false;
  for (var i = 0; i < arr1.length; i++) {
    var z = arr1[i];
    for (var t = 0; t < arr2.length; t++) {
      var g = arr2[t];
      if (z == g) {
        finded = true;
      }
    }
    if (finded == false) {
      return false;
    }
    }
    return true;
}

var rnd = casualNumbers();
setTimeout(usersNumber, 4000);
