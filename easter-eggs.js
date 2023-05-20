function TicTacToe() {
  let matrix = [[" "," "," "], [" "," "," "], [" "," "," "]]
  console.log("\n\t"+"It's O turn!"+"\n\n\n"+
              "\t"+matrix[0][0]+" | "+matrix[1][0]+" | "+matrix[2][0]+"\n"+
              "\t"+"-".repeat(9)+"\n"+
              "\t"+matrix[0][1]+" | "+matrix[1][1]+" | "+matrix[2][1]+"\n"+
              "\t"+"-".repeat(9)+"\n"+
              "\t"+matrix[0][2]+" | "+matrix[1][2]+" | "+matrix[2][2]+"\n\n");
  let play = []

  const animate = (x, y, index) => {
    console.clear()
    console.log(index%2);
    if(matrix[x][y] !== " ") {console.error("Este sitio ya esta ocupado")}
    if(index%2 == 0){
      matrix[x][y] = "O"
      console.log("\n\t"+"It's X turn!"+"\n\n\n"+
                "\t"+matrix[0][0]+" | "+matrix[1][0]+" | "+matrix[2][0]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][1]+" | "+matrix[1][1]+" | "+matrix[2][1]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][2]+" | "+matrix[1][2]+" | "+matrix[2][2]+"\n\n");
    } else if(index%2 == 1){
      matrix[x][y] = "X"
      console.log("\n\t"+"It's O turn!"+"\n\n\n"+
                "\t"+matrix[0][0]+" | "+matrix[1][0]+" | "+matrix[2][0]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][1]+" | "+matrix[1][1]+" | "+matrix[2][1]+"\n"+
                "\t"+"-".repeat(9)+"\n"+
                "\t"+matrix[0][2]+" | "+matrix[1][2]+" | "+matrix[2][2]+"\n\n");
    }
  }
  let index = 0
  this.snippet = {
    play: function(x, y) {
      console.log(x);
      console.log(y);

      if((typeof y !== 'undefined') && (typeof y !== 'undefined')) {
        setInterval(animate(x, y, index),300)
        console.log(index);
        index += 1
      }
    }
  }              
}

function Loader() {
  console.log("loader");
}
let intervalo
function Clock() {
  console.clear()
  let hora = new Date()
  let horas = hora.getHours() < 10 ? "0"+hora.getHours():hora.getHours()
  let minutos = hora.getMinutes() < 10 ? "0"+hora.getMinutes():hora.getMinutes()
  let segundos = hora.getSeconds() < 10 ? "0"+hora.getSeconds():hora.getSeconds()
  console.clear()
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

function EasterEgg(program,...rest) {
  switch(program){
    case "clock": 
      return new Clock();
    case "tic tac toe":
      return new TicTacToe()
    case "number formatter":
      return new numberFormatter(...rest)
  }
  console.clear()
}


// game = new EasterEgg("number formatter",1000,["g","Kg"])
function Marquee(sentence, length) {
  let splitSentence = sentence.split("")
  let lengthSen = Array(length).fill(" ")
  console.log(splitSentence);
  console.log(lengthSen);

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
        console.log("wewed");
        console.clear()
        clearInterval(intervalo)
        return intervalo = undefined
      }
    }
    intervalo = setInterval(animate,200)
  }
}