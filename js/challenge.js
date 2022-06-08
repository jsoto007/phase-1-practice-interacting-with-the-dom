let timerNode = document.getElementById('counter')
console.log(timerNode)

function timerCounter() {

    setInterval(function () {
        let x = 0;
        while (x >= 0) {
            x++;
            let time = timerNode.innerHTML += x
            return time;
        }
    }, 1000);
}
timerCounter()