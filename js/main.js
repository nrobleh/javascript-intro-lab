console.info("Hello from the file");
document.getElementById("myHeading").innerHTML="Nazreen";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");
let colourButtons= document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++) {
  colourButtons[i].addEventListener("click", changeColour);

}

function changeColour(ev){
    console.info(ev.target.classList[0]);
    let colourClass=ev.target.classList[0]+ " Back";
    document.body.setAttribute("class", colourClass);
}   
 document.getElementById("myTestBtn").addEventListener("click", function() {
    console.info('Hi I was clicked');
  });

  //colour picker
  let redBtn= document.querySelector(".red")
  redBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "redBack");
  });
  let greenBtn= document.querySelector(".green")
  greenBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "greenBack");
  });
  let blueBtn= document.querySelector(".blue")
  blueBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "blueBack");
  });
  let resetBtn= document.querySelector(".reset")
  resetBtn.addEventListener("click", function(){
    document.body.removeAttribute("class");
  });