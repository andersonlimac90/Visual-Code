//Saiba Fazer loops em Javascript
let tipo = 'bananalaranja'

function cpto(x){
    var text = ''
// utilizando o for of     
for (var c of x){
    text= c +text
    
    }
    return text
}
console.log(cpto(tipo))


function xpto(x){
    var text = ''
for (var c in x){
    text= x[c] +text
    }
    return text
}
console.log(xpto(tipo))


var x1
var x2
var x3
var y = 11
var z = 12
// No Python booleano é maisculuno
x1 = z++==++y
x2 = 10+"casa"
x3 = y+1===z&& 10!="20"
console.log(x1+" "+x2+" "+x3)
x1 = '1'
x2 = 1
x3 = '1'
// O igual == está comparando os valores o java scrip ele infere que o string é númerica 
console.log(x1==x2)
console.log(typeof(x1))
console.log(typeof(x2))
// Enaquanto o === comparandos se é o mesmo objeto, lembrando que a string é imutável 
console.log(x1===x3)


let a={x:1}
let b={x:2}
let c={x:3}
arr =[a,b,c]
arr.forEach((obj)=> {obj.x +=1;});
console.log(a.x,b.x,c.x)
//Fatiamento de Arrays
//NO Fatiamento o primiero está incluso e ultimo está fora
const animals = ['Ema','ovo','ela','boi']
// No fatiamento considera-se o primeiro e último não será incluído
console.log(animals.slice(2,4));


//O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano. Se uma das condições falahar retornar false
const valores = [22,1,18,6]
function xpto (x){
    return x%2 == 0
}
console.log(valores.every(xpto))





