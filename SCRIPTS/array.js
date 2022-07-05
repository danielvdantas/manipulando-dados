

// manipulando Arrays
let techs = ["html", "css", "js"]
// adicionar no fim
techs.push("nodejs")
// adiciona do inicio
techs.unshift("sql")
// remove do fim
//techs.pop()
// remove do inicio
//techs.shift()
// pegar alguns elementos do Array
//console.log(techs.slice(0,1))
// remover um ou mais itens do Array
//techs.splice(0,2)
let index = techs.indexOf('sql')
techs.splice(index, 1)

console.log(index)


//console.log(techs)