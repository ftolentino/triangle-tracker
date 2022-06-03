

// copied from morning standup when Patrick was explaining //

let triangle = function(sideOne, sideTwo, sideThree)  {
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    return "These sides do not a triangle make.";
  }
};

let triangleType = function(sideOne, sideTwo, sideThree) {
  if (sideOne===sideTwo && sideTwo===sideThree) {
    return "equilateral";
  } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
    return "isosceles";
  } else {

  }
};

$("document").ready(function() {
  $("#triangle-form").submit(function(event) {
    event.preventDefault();
    const triangle = function(sideOne, sideTwo, sideThree)  {
      if (isTriangle(sideOne, sideTwo, sideThree)) {
        return triangleType(sideOne, sideTwo, sideThree)
      } else {
        return "These sides do not a triangle make.";
      }
    };
  });
});