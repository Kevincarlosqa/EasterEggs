function TicTacToe() {
  console.log("tic tac");
}

function Loader() {
  console.log("loader");
}

function Clock() {
  console.log("clock");
}

function numberFormatter(...rest) {
  console.log("number");
  this.rest = rest
  this.snippet = function (number){
    for(let i = 0; i < rest[1].length; i++) {
      if(rest[0]*i < number && number < rest[0]*(i+1)){
        // console.log(rest[0]*Math.pow(10,rest[1].length));
        return `${number}${rest[1][i]}`
      } else if(number > rest[0]*Math.pow(10,rest[1].length)){
        console.log(rest[1].at(-1));
      }
    }
  }

}

function EasterEgg(program,...rest) {
  let instance
  switch(program){
    case "clock": 
      return instance = new Clock();
    case "tic tac toe":
      return instance = new TicTacToe()
    case "number formatter":
      return instance = new numberFormatter(...rest)
  }
}


// game = new EasterEgg("number formatter",1000,["g","Kg"])