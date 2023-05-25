var results = [];

    function play(userChoice) {
      var choices = ["piedra", "papel", "tijera"];
      var computerChoice = choices[Math.floor(Math.random() * 3)];

      var result;

      if (userChoice === computerChoice) {
        result = "Empate. Ambos eligieron " + userChoice + ".";
      } else if (
        (userChoice === "piedra" && computerChoice === "tijera") ||
        (userChoice === "papel" && computerChoice === "piedra") ||
        (userChoice === "tijera" && computerChoice === "papel")
      ) {
        result = "Ganaste. El usuario eligió " + userChoice + " y la computadora eligió " + computerChoice + ".";
      } else {
        result = "Perdiste. El usuario eligió " + userChoice + " y la computadora eligió " + computerChoice + ".";
      }

      results.push(result);

      document.getElementById("result").innerHTML = result;
      document.getElementById("history").innerHTML = "";

      for (var i = results.length - 1; i >= 0; i--) {
        var listItem = document.createElement("li");
        listItem.innerHTML = results[i];
        document.getElementById("history").appendChild(listItem);
      }
    }