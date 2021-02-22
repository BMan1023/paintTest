function setup() {
  createCanvas(800,600); //canvas
  fill(255, 0, 0); //red fill
  noStroke(); //no outline
  rect(1, 1, 30, 30); //red color palette

  fill(255, 165, 0); //orange fill
  rect(1, 32, 30, 30); //orange color palette

  fill(255, 255, 0); //yellow fill
  rect(1, 63, 30, 30); //yellow color palette

  fill(0, 255, 0); //green fill
  rect(1, 94, 30, 30); //green color palette

  fill(0, 255, 255); //cyan fill
  rect(1, 125, 30, 30); //cyan color palette

  fill(0, 0, 255); //blue fill
  rect(1, 156, 30, 30); //blue color palette

  fill(255, 0, 255); //magenta fill
  rect(1, 187, 30, 30); //magenta color palette

  fill(139, 69, 19); //brown fill
  rect(1, 218, 30, 30); //brown color palette

  fill(255); //white fill
  rect(1, 249, 30, 30); //white color palette

  fill(0); //black fill
  rect(1, 280, 30, 30); //black color palette
}


function draw() {
  // put drawing code here

  // fill(255, 0, 0); //red fill
  // noStroke(); //no outline
  // rect(1, 1, 30, 30); //red color palette

  // fill(255, 165, 0); //orange fill
  // rect(1, 32, 30, 30); //orange color palette

  // fill(255, 255, 0); //yellow fill
  // rect(1, 63, 30, 30); //yellow color palette

  // fill(0, 255, 0); //green fill
  // rect(1, 94, 30, 30); //green color palette

  // fill(0, 255, 255); //cyan fill
  // rect(1, 125, 30, 30); //cyan color palette

  // fill(0, 0, 255); //blue fill
  // rect(1, 156, 30, 30); //blue color palette

  // fill(255, 0, 255); //magenta fill
  // rect(1, 187, 30, 30); //magenta color palette

  // fill(139, 69, 19); //brown fill
  // rect(1, 218, 30, 30); //brown color palette

  // fill(255); //white fill
  // rect(1, 249, 30, 30); //white color palette

  // fill(0); //black fill
  // rect(1, 280, 30, 30); //black color palette

  if(mouseIsPressed){ //if you click your mouse
    if(mouseX <= 31 && mouseY <= 31){ //if mouse click is on red palette

      stroke(255, 0, 0); //set stroke to red
    }
    else if((mouseX <= 31) && ((mouseY > 31) && (mouseY <= 62))){ // if mouse click is on orange palette
      stroke(255, 165, 0); //set stroke to orange
    }
    else if((mouseX <= 31) && ((mouseY > 62) && (mouseY <= 93))){ // if mouse click is on yellow palette
      stroke(255, 255, 0); //set stroke to yellow
    }
     else if((mouseX <= 31) && ((mouseY > 93) && (mouseY <= 124))){ // if mouse click is on green palette
      stroke(0, 255, 0); //set stroke to green
    }
     else if((mouseX <= 31) && ((mouseY > 124) && (mouseY <= 155))){ // if mouse click is on cyan palette
      stroke(0, 255, 255); //set stroke to cyan
    }
     else if((mouseX <= 31) && ((mouseY > 155) && (mouseY <= 186))){ // if mouse click is on blue palette
      stroke(0, 0, 255); //set stroke to blue
    }
     else if((mouseX <= 31) && ((mouseY > 186) && (mouseY <= 217))){ // if mouse click is on magenta palette
      stroke(255, 0, 255); //set stroke to magenta
    }
     else if((mouseX <= 31) && ((mouseY > 217) && (mouseY <= 248))){ // if mouse click is on brown palette
      stroke(139, 69, 19); //set stroke to brown
    }
     else if((mouseX <= 31) && ((mouseY > 248) && (mouseY <= 279))){ // if mouse click is on white palette
      stroke(255); //set stroke to white
    }
     else if((mouseX <= 31) && ((mouseY > 279) && (mouseY <= 310))){ // if mouse click is on black palette
      stroke(0); //set stroke to black
    }
     else if(((mouseX > 38) && mouseY <= 313) || ((mouseY > 313)) ){
      strokeWeight(8); // set stroke weight to 8
      line(mouseX, mouseY, pmouseX, pmouseY); //draw line      
     }
     else{
      return;
     }
  }
}