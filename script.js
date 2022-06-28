//Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)

function ThroughTwenty(){

    let cont = 1
    while (cont < 21){
    console.log(cont)
    cont++ 
    }
}

ThroughTwenty()

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)

function evensToTwenty(){
    
    for(i=1;i<21;i++)
    if(i%2==0)
    console.log(i)
    return 
}

evensToTwenty()

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)

function oddsToTwenty (){

    for(i=1;i<21;i++)
    if(i%2==1)
    console.log(i)
    return
}

oddsToTwenty()

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)

function multiplesOfFive(){
 
    for(i=1;i<101;i++)
    if(i%5==0)
    console.log(i)
    return
}
multiplesOfFive()


// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)

function countingBackwards(){
    let cont = 21
    while (cont > 1){
    cont--
    console.log(cont)
    }
}

countingBackwards()

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)


// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)

function evenNumbersBackwards(){
    
    for(i=20;i>0;i--)
    if(i%2==0)
    console.log(i)
    return
}
evenNumbersBackwards()


// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)

function oddNumbersBackwards(){
    
    for(i=20;i>0;i--)
    if(i%2==1)
    console.log(i)
    return
}
oddNumbersBackwards()

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)

    function multiplesOfFiveBackwards(){
        for(i=100;i>0;i--)
        if(i%5==0)
        console.log(i)
        return
    }

multiplesOfFiveBackwards()
// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)




    





