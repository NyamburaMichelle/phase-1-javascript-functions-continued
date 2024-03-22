function saturdayFun(activity= "roller-skate"){
  return`This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
   return `This Monday, I will ${activity}.`
}

  /*function wrapAdjective(compliment='*') {
      const xx="a"
        return function() {
    const xy="dedicated"
        return function() {
    const yy="programmer"
        return function() {
    console.log(`${compliment} ${xx} ${xy} ${yy}`)}
        }          
  }
}
wrapAdjective("You are")()()()*/

function wrapAdjective(compliment='*') {
       const xx= function(adjective='a beautiful programmer'){
          return `You are ${compliment}${adjective}${compliment}!`
       }
        return xx
    }
    const result= wrapAdjective('||')





  
