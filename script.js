let spaceship = prompt(`Insira o nome da espaçonave`)
let character = prompt(`Qual caractere deseja substituir?`)
let input_character = prompt(`Por qual caractere você deseja substituir?`)
let new_spaceship = ""

for (let i = spaceship < spaceship.length; i++;) {

    new_spaceship += spaceship[i]
    if (spaceship[i] == character) {
        spaceship[i] = input_character
    } else {
        spaceship += spaceship[i]
    }

    alert(new_spaceship)

}