/*2. Указать максимальный балл. (домой)
6. Перечислить учащихся занявших первые три места в порядке убывания рейтинга. (домой) */
function getRandom (min = 1, max = 100){
    return Math.round(min + Math.random()*(max-min));
}
const grade = {
    Anton: getRandom(0,90),
    Maksym: 90,
    Vladyslav: getRandom(), 
    Oleksii: getRandom(40),
    Vadym: getRandom(40, 70),
    Maxim: getRandom(15, 80)
};

console.log(grade);

function getMaxScore (obj){
    leaderScore = -Infinity;
    for(const key in obj){
        if(obj[key]>leaderScore){
          leaderScore = obj[key]; 
        }
  
    }  
    return leaderScore;
  }
  
  console.log('2. Maximal score:', getMaxScore(grade));

  function top3 (obj) {
   
    names = Object.keys(obj);
    const top3names = names;
    return names.sort(function(name1, name2){
        return  grade[name2] - grade[name1];
        
    })
    
  }
 const top3names = (top3(grade));
  top3names.length = 3;
  console.log ('6. Top 3 students: ', top3names);