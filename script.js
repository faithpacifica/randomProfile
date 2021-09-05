

let namesArr = ['Jessica Parker','Eleanor Smith', 'Samantha Kennedy', 'Chris Brighton', 'John Kerry','Alex Biden', 'Donald Jeckson' ];
let images = ['2.jpg', '3.jpg', '4.jpg', 'images.jpg','6.jpg', '7.jpg', '8.jpg'];

let i = 0;
setInterval(function(){
    if(i == images.length - 1)
        i = 0;
    setRandomProfile(i++);
},2000);


function setRandomProfile(i){
    console.log(i)
    // let i = Math.floor(Math.random() * images.length);
    //for (let i = 0;i < images.length; i++) {
        let randomImgUrl = images[i];
        document.getElementById("profile-img").src = `./images/${randomImgUrl}`;
    //}
    //for (let j = 0;j < namesArr.length; j++) {
        let randomName = namesArr[i];
        document.getElementById("profile-name").innerText = randomName;    
    //}
}