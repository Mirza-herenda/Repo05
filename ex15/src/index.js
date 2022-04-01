function main() 
{
var myNoun="dog";
var myAdjective="big";
var myVerb="ran";
var myAdverb="quickly";

var wordBlanks= "Last year was a " + myNoun + " which was very "  + myAdjective +"." + " It " + myVerb  + " around the house "+ myAdverb+".";

return wordBlanks;
}

console.log(main());
module.exports=main;