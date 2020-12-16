document.getElementById("imageBot").style.display = "none";
document.getElementById("rock").addEventListener("click", function (){
    bot();
    check("rock");
});
document.getElementById("paper").addEventListener("click", function (){
    bot();
    check("paper");
});
document.getElementById("scissor").addEventListener("click", function (){
    bot();
    check("scissor");
});
let botChoice = "";
function bot(){
    let random =  Math.trunc(Math.random()*3)+1;
    document.getElementById("imageBot").style.display = "initial";

    switch (random){
        case 1:
            document.getElementById("imageBot").src = "pierre.png";
            botChoice = "botRock";
            break;
        case 2:
            document.getElementById("imageBot").src = "papier.png";
            botChoice = "botPaper";
            break;
        case 3:
            document.getElementById("imageBot").src = "ciseau.png";
            botChoice = "botScissor";
            break;
    }
}

let histopara = document.createElement("p");
let yourPoint = 0;
let botPoint = 0;
function check(userChoice){
    switch (userChoice){
        case "rock":
            switch (botChoice){
                case "botRock":
                    reset()
                    document.getElementById("win").innerHTML = "égalité"
                    histopara.innerHTML += "égalité<br>";
                    document.getElementById("history").append(histopara);
                    break;
                case "botPaper":
                    reset()
                    document.getElementById("win").innerHTML = "perdu"
                    histopara.innerHTML += "perdu<br>";
                    document.getElementById("history").append(histopara);
                    botPoint++;
                    document.getElementById("botScore").innerHTML = botPoint;
                    break;
                case "botScissor":
                    reset()
                    document.getElementById("win").innerHTML = "gagné"
                    histopara.innerHTML += "gagné<br>";
                    document.getElementById("history").append(histopara);
                    yourPoint++;
                    document.getElementById("yourScore").innerHTML = yourPoint;
                    break;
            }
            break;
        case "paper":
            switch (botChoice){
                case "botRock":
                    reset()
                    document.getElementById("win").innerHTML = "gagné"
                    histopara.innerHTML += "gagné<br>";
                    document.getElementById("history").append(histopara);
                    yourPoint++;
                    document.getElementById("yourScore").innerHTML = yourPoint;
                    break;
                case "botPaper":
                    reset()
                    document.getElementById("win").innerHTML = "égalité"
                    histopara.innerHTML += "égalité<br>";
                    document.getElementById("history").append(histopara);
                    break;
                case "botScissor":
                    reset()
                    document.getElementById("win").innerHTML = "perdu"
                    histopara.innerHTML += "perdu<br>";
                    document.getElementById("history").append(histopara);
                    botPoint++;
                    document.getElementById("botScore").innerHTML = botPoint;
                    break;
            }
            break;
        case "scissor":
            switch (botChoice){
                case "botRock":
                    reset()
                    document.getElementById("win").innerHTML = "perdu"
                    histopara.innerHTML += "perdu<br>";
                    document.getElementById("history").append(histopara);
                    botPoint++;
                    document.getElementById("botScore").innerHTML = botPoint;
                    break;
                case "botPaper":
                    reset()
                    document.getElementById("win").innerHTML = "gagné"
                    histopara.innerHTML += "gagné<br>";
                    document.getElementById("history").append(histopara);
                    yourPoint++;
                    document.getElementById("yourScore").innerHTML = yourPoint;
                    break;
                case "botScissor":
                    reset()
                    document.getElementById("win").innerHTML = "égalité"
                    histopara.innerHTML += "égalité<br>";
                    document.getElementById("history").append(histopara);
                    break;
            }
            break;
    }
}

function reset(){
    if (histopara.innerHTML.length > 195){
        histopara.innerHTML = "";
    }
}