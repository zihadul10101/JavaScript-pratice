function animalCalculator(depth){
var animal =0;
if(depth<=10){
animal = depth*50;
}
else if(depth<=20){
    var firstpart = 10*50;
    var remaining = depth-10;
    var secondpart =remaining*100;
    animal =firstpart +secondpart;
}
else{
   var firstpart=10*50;
   var secondpart=10*100;
   var remaining =depth -20;
   var thirdpart = remaining *300;
   animal=firstpart+secondpart+thirdpart;
}
return animal;
}
var count= animalCalculator(22);
console.log(count);
