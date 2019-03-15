function produceDrivingRange(range) {
  return function(a, b) {
    let distance = Math.abs(parseInt(a) - parseInt(b))
    let extra = Math.abs(distance - range)
    if (distance <= range) {
      return `within range by ${extra}`
    } else {
      return `${extra} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare){
    return fare * percent
  }
}

function createDriver() {
  let DriverId = 0
   return class {
     constructor(name) {
       this.id = ++DriverId
       this.name = name
     }
   }
}
