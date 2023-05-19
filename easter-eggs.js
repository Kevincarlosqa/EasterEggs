function TicTacToe() {
  console.log("tic tac");
}

function Loader() {
  console.log("loader");
}

function Clock() {
  console.log("clock");
}

function NumberFormatter(...rest) {
  console.log("number");
  this.rest = rest
  console.log(rest);
  this.snippet = function (number){
    console.log(number)
  }

}

function EasterEgg(program,...rest) {
  let instance
  switch(program){
    case "clock":
      instance = new Clock()
      return instance
      // break;
    case "tic tac toe":
      instance = new TicTacToe()
      return instance
      // break;
    case "number formatter":
      instance = new NumberFormatter(...rest)
      return instance
      // break;
  }
}


// game = new EasterEgg("number formatter",1000,["g","Kg"])