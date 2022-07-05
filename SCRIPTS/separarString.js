// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada palavra é uma posição no Array. Depois transforme o Array em um texto separando as palavras com "_"

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ") // split separa uma string retirando o conteudo informado como argumento. // Nesse caso já inserimos o que foi separado pelo split num Array(myArray)
let phraseWithUnderscore = myArray.join("_") // Nesse caso vai juntar com um separador.