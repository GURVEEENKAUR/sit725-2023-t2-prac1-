function changeText(){
    //this will write hello world in 4 different languages...
    let textList=['Hallo welt','Hola mundo','Ciao mondo','Bonjour le monde'];
    let randomNumber = getRandomNumber(0, textList.length - 1);

    console.log(randomNumber);
    document.getElementById('header').innerHTML=textList[randomNumber];

}

function getRandomNumber(min,max){
    //generate a random number between a range
    return Math.floor(Math.random()*(max-min+1)+min);
}