
            


            function pointRoboLeft() {
                document.getElementById("robot").src="robot-l.png";
                document.getElementById("direction").value="l";
              }
  
              function pointRoboRight() {
                document.getElementById("robot").src="robot-r.png";
                document.getElementById("direction").value="r";
              }
  
              function pointRoboUp() {
                document.getElementById("robot").src="robot-b.png";
                document.getElementById("direction").value="u";
              }
  
              function pointRoboDown() {
                document.getElementById("robot").src="robot-f.png";
                document.getElementById("direction").value="d";
              }
  
  
              function moveLeft() {
              var element = document.getElementById("robot");
              if(parseInt(element.style.left) > 100){
                element.style.left = parseInt(element.style.left) - 100 + 'px';
                updateCoords(element.style.left,element.style.top);
                } else {
                  tooHot();
                }
              }
  
              function moveRight() {
              var element = document.getElementById("robot");
              if(parseInt(element.style.left) < 500){
                element.style.left = parseInt(element.style.left) + 100 + 'px';
                updateCoords(element.style.left,element.style.top);
                } else {
                  tooHot();
                }
  
              }
  
              function moveUp() {
              var element = document.getElementById("robot");
              if(parseInt(element.style.top) > 100){
                element.style.top = parseInt(element.style.top) - 100 + 'px';
                updateCoords(element.style.left,element.style.top);
                } else {
                  tooHot();
                }
              }
  
              function moveDown() {
              var element = document.getElementById("robot");
              if(parseInt(element.style.top) < 400){
                element.style.top = parseInt(element.style.top) + 100 + 'px';
                updateCoords(element.style.left,element.style.top);
                } else {
                  tooHot();
                }
              }
  
              function updateCoords(x,y){
                a = x.split("px");
                a1 = a.join("");
                b = y.split("px")
                b1 = b.join("");
  
                document.getElementById("x").value = Math.floor(a1/100);
                document.getElementById("y").value = Math.floor(b1/100)+1;
                updateOutput()
              }

              function updateOutput(){
                gridX = document.getElementById("x").value;
                gridY = document.getElementById("y").value;
                facing = document.getElementById("direction").value
                if(gridX==1) {document.getElementById("oX").innerHTML = 0 } else
                if(gridX==2) {document.getElementById("oX").innerHTML = 1 } else
                if(gridX==3) {document.getElementById("oX").innerHTML = 2 } else
                if(gridX==4) {document.getElementById("oX").innerHTML = 3 } else
                if(gridX==5) {document.getElementById("oX").innerHTML = 4 }

                if(gridY==1) {document.getElementById("oY").innerHTML = 4 } else
                if(gridY==2) {document.getElementById("oY").innerHTML = 3 } else
                if(gridY==3) {document.getElementById("oY").innerHTML = 2 } else
                if(gridY==4) {document.getElementById("oY").innerHTML = 1 } else
                if(gridY==5) {document.getElementById("oY").innerHTML = 0 }

                if(facing=="l") {document.getElementById("roboIsFacing").innerHTML = "WEST" } else
                if(facing=="r") {document.getElementById("roboIsFacing").innerHTML = "EAST" } else
                if(facing=="u") {document.getElementById("roboIsFacing").innerHTML = "NORTH" } else
                if(facing=="d") {document.getElementById("roboIsFacing").innerHTML = "SOUTH" } 
              }
  
  
  
              function moveRobot() {
              var dir = document.getElementById("direction").value;
              var robot = document.getElementById("robot");
              if(dir==="l") { moveLeft()   } else
              if(dir==="r") { moveRight()  } else
              if(dir==="u") { moveUp()     } else
              if(dir==="d") { moveDown()   } 
              lightUpGrid()
              }

              function lightUpGrid(){
                im="";
                $("img").removeClass('bgw');
                x = document.getElementById("x").value;
                y = document.getElementById("y").value;
                if(y==1) {im="a"+x}
                if(y==2) {im="b"+x}
                if(y==3) {im="c"+x}
                if(y==4) {im="d"+x}
                if(y==5) {im="e"+x}
                eval('$("#'+im+'").addClass("bgw");');
                
              }
  
              function moveSelection(evt) {
                if($("#gamestatus").val()=="started"){
                rl = document.getElementById("robot").style.left;
                rt = document.getElementById("robot").style.top;
                  switch (evt.keyCode) {
                      case 37:
                      pointRoboLeft();
                      break;
                      case 39:
                      pointRoboRight();
                      break;
                      case 38:
                      pointRoboUp();
                      break;
                      case 40:
                      pointRoboDown();
                      break;
                      case 32:
                      moveRobot();
                      break;
                      }
                    updateOutput();
                    }
                  };

                  function tooHot(){
                    var q = roboQuotes[ Math.floor( Math.random() * roboQuotes.length ) ];
                    document.getElementById("quote").innerHTML = q;
                    $(".warning").fadeIn(500);
                    setTimeout('$(".warning").fadeOut(1000)',2000);
  
                  }
  
  
          function robotReady()
          {
            window.addEventListener('keydown', moveSelection);
          }

          function placeRobot(){
            $(".startBtn").fadeOut(100)
            $("#robot").animate({left: '100px'});
              setTimeout('$("#robot").animate({top: "430px"})',100);
              setTimeout('$("#e1").addClass("bgw")',900);
              setTimeout('$(".heading").fadeIn(1000)',1000);
              setTimeout('$(".howto").fadeIn(1000)',2000);
            updateOutput();
            }
            
            function revealCoords(){
              $("#oX").fadeIn(1000);
              $("#oY").fadeIn(1000);
              $("#roboIsFacing").fadeIn(1000);
              $("#gamestatus").val("started");
            }

            var roboQuotes = [
                "...are you crazy!? That's too hot",
                "You don't expect me to jump do you?",
                "Ahh...no thanks",
                "It does not compute, it does not compute",
                "I'll melt if I go there",
                "That's FIRE dude",
                "Get the hose ready",
                "I'll last 2 minutes if I go further"
              ];