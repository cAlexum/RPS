let currentTime = parseInt(document.getElementById('countdown').innerText);
function throwPC() {
    randomInteger = Math.floor(Math.random() * 3 + 1);
    if (randomInteger == 1) {
        computerSelection = 'rock';
        alert ("rock");
    }
    else if (randomInteger == 2) {
        computerSelection = "paper";
        alert ("paper");
    }
    else if (randomInteger == 3) {
        computerSelection = 'scissors';
        alert ("scissors");
    }
    else () => {
        alert ("something happened");
    };
};

function start() {
    const countDown = setInterval(() => {
        currentTime--;
        document.getElementById('countdown').innerText = currentTime;
        if (currentTime <= 0) {
            clearInterval(countDown);
            alert('test')
        }
        else () => {
            document.getElementById('')
        }
    }, 1000);   
    alert('function started');
    document.getElementById('play-again').disabled = true;
    throwPC();
    }
    countDown;

