function mouseDown(eventParams) {
  mouseClicked = true;
  if(state == 1) state++;
  //console.log(state);
}

function mouseUp(eventParams){
	mouseClicked = false;
}

function mouseMove(eventParams){
	mouseX = eventParams.clientX;
	mouseY = eventParams.clientY;
}