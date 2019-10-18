// Capricorn: Jan. 20-Feb. 16.
// Aquarius: Feb. 16-March 11.
// Pisces: March 11-April 18.
// Aries: April 18-May 13.
// Taurus: May 13-June 21.
// Gemini: June 21-July 20.
// Cancer: July 20-Aug. 10.
// Leo: Aug. 10-Sept. 16.
// Virgo: Sept. 16-Oct. 30.
// Libra: Oct. 30-Nov. 23.
// Scorpio: Nov. 23-29.
// Ophiuchus: Nov. 29-Dec. 17.  (Yep, this one is new — read all about the Ophiuchus way of life here)
// Sagittarius: Dec. 17-Jan. 20

//
// function loop(){
//   let arr = [1,2,3,4,5,6,7]
//
//   for(let i=1;i<=100;i++){
//     console.log(i)
//   }



document.getElementById("submit").onclick=horoscope;
function horoscope(){
  let result;
  let statement;
  let month= document.getElementById("Month").value
  let day= document.getElementById("Day").value

  if((month==='December' && day>=22)|| (month==='January' && day<=19)){
    result='Capricorn'
    statement=`${result}  is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.`
}else if((month==='January' && day>=20)||(month==='Febuary' && day<=18)){
  result='Aquarius';
} else if((month=== 'Febuary' && day>=19)||(month==='March' && day<=20)){
  result='Pisces'
  statement=`${result} a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces's attention between fantasy and reality.`
} else if((month=== 'March'&& day>=21)||(month==='April' && day<=19)){
  result='Aries'
  statement=`${result} loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.`
}else if((month==='April' && day>=20)||(month==='May' && day<=20)){
  result='Taurus'
  statement=`${result} is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.`
}else if((month==='May'&& day>=21)||(month==='June'&& day<=20)){
  result='Gemini'
  statement=`${result} Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself`
}else if ((month=== 'June' && day>=21)||(month==='July' && day<=22)){
  result='Cancer'
  statement=`${result} is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. `
} else if((month==='July'&& day>=23)||(month==='August' && day<=22)){
  result='Leo'
  statement= `${result} Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. `
} else if ((month==='August' && day>=23)||(month=== 'September' && day<=22)){
  result='Virgo'
  statement=`${result} is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life`
} else if((month==='September'&& day>=23)||(month==='October'&& day<=22)){
  result='Libra'
  statement=`${result} is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.`
}else if((month==='October'&& day>=23)||(month=== 'November' && day <=21)){
  result='Scorpio'
  statement=`${result} is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.`
} else if((month==='November' && day>=22)||(month==='December'&& day<=21)){
  result='Sagittarius'
  statement=` ${result} are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures`
}
  document.getElementById("response").innerHTML= result;
  document.getElementById("statement").innerHTML= statement;
}
