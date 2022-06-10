function runningAverage() {
  let arr = []
  return (y)=>{
    arr.push(y)
    return Math.round((arr.reduce((a,b)=>a+b,0)/arr.length)*100)/100
  } 
}