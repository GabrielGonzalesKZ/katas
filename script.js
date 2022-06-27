//Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)

function ThroughTwenty(){

    let cont = 1
    while (cont < 21){
    console.log(cont)
    cont++
    }
}

console.log(ThroughTwenty())

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)

function evensToTwenty(){
    
    for(i=1;i<21;i++)
    if(i%2==0)
    console.log(i)
}
console.log(evensToTwenty())

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)

function oddsToTwenty (){

    for(i=1;i<21;i++)
    if(i%2==1)
    console.log(i)
}

console.log(oddsToTwenty())

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)

function multiplesOfFive(){
 
    for(i=1;i<101;i++)
    if(i%5==0)
    console.log(i)
}

console.log(multiplesOfFive())


// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)

function countingBackwards(){
    let cont = 20
    while (cont > 0){
    console.log(cont)
    cont--
    }
}

console.log(countingBackwards())

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)


// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)

function evenNumbersBackwards(){
    
    for(i=20;i>0;i--)
    if(i%2==0)
    console.log(i)
}
console.log(evenNumbersBackwards())


// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)

function oddNumbersBackwards(){
    
    for(i=20;i>0;i--)
    if(i%2==1)
    console.log(i)
}
console.log(oddNumbersBackwards())

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)

    function multiplesOfFiveBackwards(){
        for(i=100;i>0;i--)
        if(i%5==0)
        console.log(i)
    }
console.log(multiplesOfFiveBackwards())

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)




    





