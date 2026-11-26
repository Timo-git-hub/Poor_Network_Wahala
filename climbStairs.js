function climbStairs(totalSteps){
  let firstStep = 1
  let secondStep = 2
  let numberOfWays = 0
  for (let climb = 3; climb <= totalSteps; climb++ ){
    numberOfWays = firstStep + secondStep
    firstStep = secondStep
    secondStep = numberOfWays
  }

  return "Number of Distinct ways to climb the stairs is " + numberOfWays;
}
