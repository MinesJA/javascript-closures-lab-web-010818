const app = "I don't do much."


function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter ++;
  }

  function getBumps(){
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType){

  function innerFunction(deadlyDevice){
    let newObj = {};

    newObj.animalType = animalType;
    newObj.deadlyDevice = deadlyDevice;

    return newObj;
  };

  return innerFunction;
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
