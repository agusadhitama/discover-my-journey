const words = [
  "Proudly from Papua",
  "From Papua, With Pride",
  "Papua Runs in My Veins"
];

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type(){

current = words[i]

if(!isDeleting){
j++
}else{
j--
}

document.querySelector(".typing").textContent = current.substring(0,j)

if(!isDeleting && j === current.length){

isDeleting = true
setTimeout(type,1000)
return

}else if(isDeleting && j === 0){

isDeleting = false
i++

if(i === words.length){
i = 0
}

}

setTimeout(type,100)

}

type()


function scrollToStory(){

document.getElementById("story").scrollIntoView({
behavior:"smooth"
})

}



function reveal(){

let reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top
let elementVisible = 150

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)

// reveal hero image
window.addEventListener("load", () => {
  document.querySelector(".hero .profile").classList.add("active");
});
