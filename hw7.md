Return the Missing Element      https://www.codewars.com/kata/reviews/52995cff9ce954dc50000a86/groups/59a63c97040300eb12000ab5
Add property to every object in array       https://www.codewars.com/kata/reviews/54e8cae858b1db0d2a000148/groups/5ea17fae01992b000141b2ee

Take a Ten Minute Walk  
не знаю в чем проблема, все вроде проходит, но когда нажимаю my solutions, пишет что моих решений нет, хотя уже несколькими способами записал и их приняло. В общем вот код:
function isValidWalk(walk) {
    let s = 0;
    let n = 0;
    let e = 0;
    let w = 0;
    for(let i=0; i<=10;i++){
        if(walk[i]==='s'){s++}
        if(walk[i]==='n'){n++}
        if(walk[i]==='e'){e++}
        if(walk[i]==='w'){w++}
    }
        if(s===n && e===w && walk.length === 10){return true}
        return false;
}   



Find Your Villain Name   сделал две фнукции, обе работают, отличаются тем какой тип данны забит в 'bithday' строка или дата, на codewars тест не проходит(
    код где 'birthday' дата:
    ----------------------------------------------
    const month = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward"];

    const day = ["Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket"];

    function getVillainName (birthday){
    let m = birthday.getMonth();
    let n = birthday.getDate().toString().slice(-1);
    return month[m]+ ' '+ day[n];
    }
------------------------------------------------------
код, где 'birthday' строка:

const month = {};
    month.January = "The Evil";
    month.February = "The Vile";
    month.March = "The Cruel";
    month.April = "The Trashy";
    month.May = "The Despicable";
    month.June = "The Embarrassing";
    month.July = "The Disreputable";
    month.August = "The Atrocious";
    month.September = "The Twirling";
    month.October = "The Orange";
    month.November = "The Terrifying";
    month.December = "The Awkward";

    const day = ["Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket"];    

    function getVillainName(birthday){
    let m = birthday.split(' ').shift();
    let n = birthday.split(' ').pop().slice(- 1 );
    
    return month[m] + ' ' + day[n];
    }