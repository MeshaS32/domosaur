let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px"

//tag.className grabs the first instance of that taf with that className
let paraMess = document.querySelector('p.mess-with-me')

paraMess.style.background = "green"

let hidDino = document.querySelector('#hide-me')
hidDino.style.display = "none"


let firstDino = document.querySelector('#triceratops')
firstDino.style.width = "324px"

spanMess.addEventListener('click', function(){
    spanMess.style.color = "orange"
})

firstDino.addEventListener('click', function(){
    firstDino.style.border = "3px solid red"
})

firstDino.addEventListener('click', function(){
    firstDino.style.opacity = ".50"
})

// Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

let row = document.querySelector('#row')
let colorChangeButton = document.querySelector("#toggle")




// Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!

let dinoHov = document.querySelector('#biggify')

dinoHov.addEventListener("mouseover", function(){
    
    dinoHov.style.width = "200px" 
}) 


colorChangeButton.addEventListener('click', function(){
    console.log("Testing Button!");

    if(row.style.background === ""){
    row.style.background = "black"
    }else if(row.style.background === "black"){
        row.style.background = "";
    }

    })

dinoHov.addEventListener("mouseout", function(){
    if(dinoHov.style.width = "200px"){
        dinoHov.style.width = "150px"
    }
})




