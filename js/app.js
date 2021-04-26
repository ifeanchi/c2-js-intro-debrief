let myNumber = 20;
if (typeof myNumber !== "number") {console.log('this is not a number');}
else if (myNumber%15 === 0){ console.log('Genbuzz');}
else if (myNumber%3 === 0){ console.log('Gen');}
else if (myNumber%5 === 0){ console.log('Buzz');}
else {console.log(myNumber);}
