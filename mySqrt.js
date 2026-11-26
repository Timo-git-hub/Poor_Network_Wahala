function mySqrt(number){
  for(let checker=1;checker<=number;checker++){
    if(checker*checker>number){
      return checker-1;
    }
  }
}
let test = 9;
let result = mySqrt(test);
