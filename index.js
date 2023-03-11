
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
  
    return gifts;
  }
  
  wrapGifts(gifts)

  const names =["Guadalupe", "Ollie","Aki"];
const messages = [];
function writeCards(names, eventNames){
    for (let i = 0; i < names.length; i ++){
  let message =  `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`;
    messages.push(message);
} return messages;
}
function countDown(number){
    while (number >= 0){
        console.log(number);
        number --;
    }
}