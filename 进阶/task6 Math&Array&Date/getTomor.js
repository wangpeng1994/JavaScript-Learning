function getTomor(current){
  var nextDay = Date.parse(current) + 1000*60*60*24
  var nextDayObj = new Date(nextDay)
  return `${nextDayObj.getFullYear()}-${nextDayObj.getMonth() + 1}-${nextDayObj.getDate()}`
}

getTomor('2017-2-28')
// "2017-3-1"