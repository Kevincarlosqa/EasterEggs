function TicTacToe() {
  // new Loader()
  let matrix = [[" "," "," "], [" "," "," "], [" "," "," "]]
  console.log("\n\t"+"It's O turn!"+"\n\n\n"+
              "\t"+matrix[0][0]+" | "+matrix[1][0]+" | "+matrix[2][0]+"\n"+
              "\t"+"-".repeat(9)+"\n"+
              "\t"+matrix[0][1]+" | "+matrix[1][1]+" | "+matrix[2][1]+"\n"+
              "\t"+"-".repeat(9)+"\n"+
              "\t"+matrix[0][2]+" | "+matrix[1][2]+" | "+matrix[2][2]+"\n\n");
  let play = []

  let winner = function(matrix, win){
    for(let i = 0; i <= 2; i++){
      if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2] && matrix[i][0] == matrix[i][2] && matrix[i][0] != " " && matrix[i][1] != " " && matrix[i][2] != " "){
        return console.log(`${win} won!!`)
      } else if(matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i] && matrix[0][i] == matrix[2][i] && matrix[0][i] != " " && matrix[1][i] != " " && matrix[2][i] != " ") {
        return console.log(`${win} won!!`)
      }
    }
  }
  const animate = (x, y, index) => {
    console.clear()
    console.log(index%2);
    // if(matrix[x][y] !== " ") {return console.error("The given coordinate is already taken")}
    if(index%2 == 0){
      matrix[x][y] = "O"
      console.log("\n\t"+"It's X turn!"+"\n\n\n"+
                "\t"+matrix[0][0]+" | "+matrix[1][0]+" | "+matrix[2][0]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][1]+" | "+matrix[1][1]+" | "+matrix[2][1]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][2]+" | "+matrix[1][2]+" | "+matrix[2][2]+"\n\n");
      console.log(matrix);
      winner(matrix, "O")
    } else if(index%2 == 1){
      matrix[x][y] = "X"
      console.log("\n\t"+"It's O turn!"+"\n\n\n"+
                "\t"+matrix[0][0]+" | "+matrix[1][0]+" | "+matrix[2][0]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][1]+" | "+matrix[1][1]+" | "+matrix[2][1]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][2]+" | "+matrix[1][2]+" | "+matrix[2][2]+"\n\n");
      winner(matrix, "X")
    }
  }
  let index = 0
  this.snippet = {
    play: function(x, y) {
      if((typeof y !== 'undefined') && (typeof y !== 'undefined')) {
        if(matrix[x][y] !== " ") {
          console.error("The given coordinate is already taken")
        } else{
        setInterval(animate(x, y, index),300)
        console.log(index);
        index += 1;
        }
      }
    }
  }              
}

function Loader(frames = ["|", "/", "\u2014", "\\"]) {
  console.log("loader");
  // let index = 0;
  this.execute
  let interval
  let index = 0;
  const animate = () => {
    if (index >= frames.length) index = 0;
    console.clear();
    console.log(frames[index]);
    index += 1;
  };
  // interval = setInterval(animate, 500);
  // setTimeout(() => {
  //   clearInterval(interval);
  //   console.clear();
  // }, 3000);

  this.render = function () {
    return setInterval(animate, 200);
  };

  this.load = function (callback, ...args) {
    const intervalId = this.render();
    // clearInterval(intervalId);
    // setTimeout(clearInterval, 5000, intervalId);
    setTimeout(() => {
      clearInterval(intervalId);
      this.execute = callback(...args);
      console.clear();
    }, 3000);
  };
}

let intervalo
function Clock() {
  console.clear()
  let hora = new Date()
  let horas = hora.getHours() < 10 ? "0"+hora.getHours():hora.getHours()
  let minutos = hora.getMinutes() < 10 ? "0"+hora.getMinutes():hora.getMinutes()
  let segundos = hora.getSeconds() < 10 ? "0"+hora.getSeconds():hora.getSeconds()
  console.log(`${horas}:${minutos}:${segundos}`);
  if (!intervalo) {
    intervalo = setInterval(Clock, 1000);
  }
  // setInterval(Clock,1000)
  function stop() {
    clearInterval(intervalo)
    console.clear()
    console.log("Let's keep playing!")
    return intervalo = undefined
  }
  window.addEventListener('click',stop)
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



// game = new EasterEgg("number formatter",1000,["g","Kg"])
function Marquee(sentence, length) {
  console.log(sentence);
  console.log(length);
  let splitSentence = sentence.split("")
  let lengthSen = Array(length).fill(" ")
  
  this.run = function() {
    let index = 0
    const animate = () => {
      if (splitSentence[index]){
        lengthSen.push(`${splitSentence[index]}`)
      } else {
        lengthSen.push(" ")
      }
      lengthSen.shift()
      console.clear();
      console.log(lengthSen.join(""))
      index += 1
      if(index > length+sentence.length){
        index = 0
        console.clear()
        clearInterval(intervalo)
        return intervalo = undefined
      }
    }
    intervalo = setInterval(animate,200)
  }
  this.stop = function() {
    clearInterval(intervalo)
    console.clear()
    return intervalo = undefined
  }
}
function EasterEgg(program,...rest) {
  let loader = new Loader()
  console.log(rest);
  switch(program){
    case "clock": 
    loader.load(Clock)
    // return new Clock();
    break
    case "tic tac toe":
      let tictactoe = new TicTacToe()
      return loader.load(tictactoe.snippet.play)
      // return new TicTacToe()
      break
      case "marquee":
      let marquee = new Marquee(rest[0],rest[1])
      console.log(rest[0]);
      loader.load(marquee.run)
      break
    case "number formatter":
      return new numberFormatter(...rest)
  }
  // console.clear()
}