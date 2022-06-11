const timerNode = document.getElementById('counter')
const form = document.querySelector('form');

console.log(timerNode)
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = e.target.children[0].value
    console.log(userInput)
    const p = document.createElement('p')
    const ul = document.getElementById('list')
    ul.appendChild(p);
    p.innerText = userInput;
    form.reset()
})


document.getElementById('list').addEventListener('click', (e) => {
    e.remove()
})


function timerCounter() {
    setInterval(function () {
        let int = parseInt(timerNode.innerText);
        int++
        timerNode.innerText = int;
    }, 1000);
}
timerCounter()

function handleSubmit() {
    const submit = document.getElementById("comment-input")
}