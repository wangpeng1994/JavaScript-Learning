function Car(name, color){
  this.name = name
  this.color = color
  this.status = 'stopped'
}

Car.prototype.run = function(){
  this.status = 'running'
}
Car.prototype.stop = function(){
  this.status = 'stopped'
}
Car.prototype.getStatus = function(){
  console.log(this.status)
}

var c1 = new Car('BMW', 'black')

console.log(c1.color)   //black
c1.getStatus()          //stopped
c1.run()
c1.getStatus()          //running
c1.stop()
c1.getStatus()          //stopped