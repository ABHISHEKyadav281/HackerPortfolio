
var intervalID = window.setInterval(updateScreen, 200);
var console = document.getElementById("console");
const msg = document.querySelector(".msg");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var q = document.createElement("p");
    q.textContent = e;
    docfrag.appendChild(q);
  });
  //Clear DOM body
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
  console.appendChild(docfrag);
}

setTimeout(() => { msg.style.background = "limegreen";
msg.innerHTML = "ACCESS GRANTED";
msg.style.boxShadow = "0 0 0px limegreen";
console.style.display = "none";}, 5000);

setTimeout(() => {
    document.querySelector(".body1").style.height = `0vh`;
document.querySelector(".body1").style.display = "none";}, 6000);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });



  


document.querySelector(".circ").addEventListener("mouseover",function(){
    document.querySelector(".page1").style.backgroundColor="black";
    document.querySelector(".page1").style.color="#02ff24";
})
document.querySelector(".circ").addEventListener("mouseout",function(){
    document.querySelector(".page1").style.backgroundColor="#dadada";
    document.querySelector(".page1").style.color="black";
})










document.querySelectorAll(".slide").forEach(function (slide) {

    slide.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX);

        var dim=slide.getBoundingClientRect()

        slide.lastElementChild.style.clipPath =
            `circle(15% at ${dets.clientX -(dim.left)}px ${dets.clientY-(dim.top)}px)`;
    })
    slide.addEventListener("mouseleave", function (dets) {
        slide.lastElementChild.style.clipPath =
            `circle(0px at ${dets.clientX}px ${dets.clientY}px)`;
    })

})

function  skewer(){
     var current=document.querySelector(".slide").getBoundingClientRect().left
    document.querySelector(".box") .addEventListener("scroll", function(){
        var prev=document.querySelector(".slide").getBoundingClientRect().left
        var diff=prev-current;
        document.querySelectorAll(".slide").forEach(function(slide){
            // slide.style.transform=`skewX(${diff*0.2}deg)`
            slide.style.transform=`skewX(${diff*0.15}deg)`
            setTimeout(function(){
                slide.style.transform=`skewX(0deg)`
    
            },1500)
            
        })
        current=prev; 

    })
 }
skewer();


























