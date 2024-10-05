document.getElementById("para").textContent="This is the first <b>paragraph</b>."

document.getElementById("para2").innerHTML="This is the first <i>paragraph</i>."

document.getElementById("circle").addEventListener("mouseenter", function(){
    document.getElementById("output").textContent="The mouse is now inside the circle."
})
document.getElementById("circle").addEventListener("mouseleave", function(){
    document.getElementById("output").textContent="The mouse is now outside the circle."
})
document.getElementById("circle").addEventListener("mouseup", function(){
    document.getElementById("output").textContent="You release the mouse click."
})
document.getElementById("circle").addEventListener("mousedown", function(){
    document.getElementById("output").textContent="You clicked on the circle."
})

//Adding text to div with id box when window is resized.
window.addEventListener("resize", function(){
    document.getElementById("dimensions").textContent = window.innerWidth + "px" + " by " + window.innerHeight + "px";
});

document.getElementById("btn").addEventListener("click", function(){
// document.getElementById("box").style,backgroundColor = "green";
// document.getElementById("box").style,borderRadius = "50%";
// document.getElementById("box").style,width = "200px";
// document.getElementById("box").style,height = "200px";
document.getElementById("box").classList.add("change")
});

document.getElementById("btn").addEventListener("remove", function(){
    document.getElementById("box").classList.add("change")
});