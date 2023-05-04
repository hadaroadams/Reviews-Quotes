console.log("hello World")

let dataBase=[
    {
        id: 1,
        name:"Peter Jone",
        job:"intern",
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image:"./assert/image1.jpeg",
    },
      {
        id: 2,
        name:"Bill Anderson",
        job:"The Boss",
        text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image:"./assert/image2.jpeg",
    },
      {
        id: 3,
        name:"Susan Smith",
        job:"Web Developer",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        image:"./assert/image3.jpeg",
    },
    {
        id: 4,
        name:"Hadaro Adams",
        job:"Senior Web developer",
        text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image:"./assert/image7.jpg",
    }
]
let num = 0
let buttons = document.querySelectorAll("button");
let pic = document.querySelector("#pic");
let person = document.querySelector("#name");
let title = document.querySelector("#title");
let description = document.querySelector("#description");

window.addEventListener('load',display)


buttons.forEach((item)=>{
    item. onclick=()=>{
        if(item.id=="back"){
            console.log("back")
            moveBack()
            display()
        }
        if(item.id=="forward"){
            console.log("forward")
            moveForward()
            display()
        }
        if(item.id == "random"){
           randomSelection()
           display()
        }
    }
})

function moveForward(){
    num++
    console.log(num)
    if(num==dataBase.length){
        num = 0
    }
}

function moveBack(){
    if(num<=0){
        num=4
    }
    console.log(num)
    num--
}
function randomSelection(){
    num = Math.floor(Math.random()*4)
}

function display(){
    let data =  dataBase[num]
    pic.src=data.image
    person.innerText=data.name
    title.innerText=data.job
    description.innerText=data.text    
}