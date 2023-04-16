let btn = document.getElementById("btn")
let screen = document.getElementById("screen")

let number = parseInt(Math.random()*(100-1) + 1)


btn.addEventListener('click', function() {
    let input = document.getElementById("input").value 
    if (input == number) {
        screen.innerHTML = `You Guessed Right, Your number is ${number}`
        input.innerHTML = ' '
    }else if (input > number) {
        screen.innerHTML = `You guessed High`
        input.innerHTML = ' '
    };
    if (input < number) {
        
         screen.innerHTML = `You guess low`
         input.innerHTML = ' '
    }
})