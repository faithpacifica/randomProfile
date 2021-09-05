

let namesArr = ['Jessica Parker','Eleanor Smith', 'Samantha Kennedy', 'Chris Brighton', 'John Kerry','Alex Biden', 'Donald Jeckson' ];
let images = ['2.jpg', '3.jpg', '4.jpg', 'images.jpg','6.jpg', '7.jpg', '8.jpg'];

setInterval(function(){
    setRandomProfile();
},1000);


function setRandomProfile(){
    let i = Math.floor(Math.random() * images.length);
    let randomImgUrl = images[i];
    let randomName = namesArr[i];
    document.getElementById("profile-img").src = `./images/${randomImgUrl}`;
    document.getElementById("profile-name").innerText = randomName;    
}