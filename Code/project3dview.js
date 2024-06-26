const playBtn=document.querySelector(".play")
const audio=document.querySelector(".audio")
const timeEnd=document.querySelector(".end")
const timestart=document.querySelector(".start")
const linetime=document.querySelector(".linetime")
const playList=document.querySelector(".playlist")
const playNext=document.querySelector(".next")
const playPrew=document.querySelector(".resever")
const musicList=document.querySelector(".music-name")
const imgList=document.getElementsByClassName("my-img")
const link=document.querySelector(".icon a")
const transformm=document.querySelector(".link")
const returnn=document.querySelector("#return")
const autoo=document.querySelector("#auto")
const autoIdea=document.querySelector(".matic")
const returnIdea=document.querySelector(".Return")
var music=3
const audioList=["thienlyoi.mp3","hoahaiduong.mp3","songgio.mp3"
    ,"domdom.mp3","bacphan.mp3","emgioi.mp3","la1thangcontrai.mp3"
]
const musicName=["Thiên Lý Ơi","Hoa Hải Đường","Sóng Gió","Đóm Đóm"
    ,"Bạc Phận","Em Gì Ơi","Là 1 Thằng Con Trai"
]
const musicLink=["https://youtu.be/OrDB4jpA1g8?si=wNlqVaHI6LxHbSlR",
    "https://youtu.be/Bhg-Gw953b0?si=RDcp7E5hbkAOg1uD",
    "https://youtu.be/j8U06veqxdU?si=n3xM1JEDRj4qW2mW",
    "https://youtu.be/4CCGI83vOVo?si=jCCwlbAJZGW43DAw",
    "https://youtu.be/WX7dUj14Z00?si=R4g4l8LUNSyiRVFj",
    "https://youtu.be/cBClD7jylos?si=Pi2KDE3UtzcrLZFf",
    "https://youtu.be/vjZsxtlJ-_M?si=HfCS0hYk8i1Guv4a",
]
link.href=musicLink[music]
audio.src=audioList[music]
var active=3
function next(activee){
    var index=0
    for(var i=-activee;i<0;i++){
        var indexA=i+-2
        imgList[index].style.transform=`translateX(${-((activee-3)*193)}px) perspective(800px) rotateY(${-(indexA*10)}deg)`
        index+=1
    }
    index+=1
    for(var j=1;j<imgList.length-activee;j++){
        var indexD=j+2
        imgList[index].style.transform=`translateX(${-((activee-3)*193)}px) perspective(800px) rotateY(${-(indexD*10)}deg)`
        index+=1
    }

    imgList[activee].style.transform=`translateX(${-((activee-3)*193)}px) scale(1.2) perspective(800px) rotateY(0deg)`

}
function skew(activee){
    var index=0
    for(var i=-activee;i<0;i++){
        var indexA=i+-2
        imgList[index].style.transform=`translateX(${((3-active)*193)}px) perspective(800px) rotateY(${-(indexA*10)}deg)`
        index+=1
    }
    index+=1
    for(var j=1;j<imgList.length-activee;j++){
        var indexD=j+2
        imgList[index].style.transform=`translateX(${((3-active)*193)}px)  perspective(800px) rotateY(${-(indexD*10)}deg)`
        index+=1
    }

    imgList[activee].style.transform=`translateX(${((3-active)*193)}px) scale(1.2) perspective(800px) rotateY(0deg)`
}
document.querySelector(".music-name").innerHTML=musicName[music]
playBtn.addEventListener("click",function(){
    if(playBtn.src.includes("play.png")){
        playBtn.src="pause.png"
        audio.play()
    }else{
        playBtn.src="play.png"
        audio.pause()
    }
});
function continuee (){
    active+=1
    if(active>6 &&(autoo.style.textShadow=="rgb(245, 118, 139) 0px 0px 10px")){
        active=0
    }else{
        if(active>6){
            active=6
        }
    }
    next(active)
    linetime.style.width= 
    music=music+1
    if(music>=audioList.length&&(autoo.style.textShadow=="rgb(245, 118, 139) 0px 0px 10px")){
        music=0
    }else{if(music>=audioList.length){music=audioList.length-1}}
    audio.src=audioList[music]
    link.href=musicLink[music]
    linetime.style.width=0
    document.querySelector(".music-name").innerHTML=musicName[music]
}
playNext.addEventListener("click",function(){
    playBtn.src="play.png"
    continuee()
})
function skeww(){
    active-=1
    if(active<0){
        active=0
    }
    skew(active)
    music=music-1
    if(music<0){
        music=0
    }
    audio.src=audioList[music]
    link.href=musicLink[music]
    linetime.style.width=0
    document.querySelector(".music-name").innerHTML=musicName[music]
}
playPrew.addEventListener("click",function(){
    playBtn.src="play.png"
    skeww()
})
returnn.addEventListener("click",function(){
    audio.pause()
    playBtn.src="play.png"
    audio.currentTime=0
    linetime.style.width=0
})
autoo.style.textShadow= "0px 0px 0px rgb(245, 118, 139)"
autoo.addEventListener("click",function(){
    console.log(autoo.style.textShadow)
    if(autoo.style.textShadow == "rgb(245, 118, 139) 0px 0px 0px"){
        autoo.style.textShadow= "0px 0px 10px rgb(245, 118, 139)"
    }else{
        autoo.style.textShadow = "0px 0px 0px rgb(245, 118, 139)"
    }
    console.log(autoo.style.textShadow)
})
transformm.style.opacity=0
transformm.addEventListener("mouseover",function(){
    transformm.style.opacity=0.8
    imgList[active].style.opacity=0.5
})
transformm.addEventListener("mouseout",function(){
    transformm.style.opacity=0
    imgList[active].style.opacity=1
})
autoIdea.style.opacity=0
autoo.addEventListener("mouseover",function(){
    autoIdea.style.opacity=1
})
autoo.addEventListener("mouseout",function(){
    autoIdea.style.opacity=0
})
returnIdea.style.opacity=0
returnn.addEventListener("mouseover",function(){
    returnIdea.style.opacity=1
})
returnn.addEventListener("mouseout",function(){
    returnIdea.style.opacity=0
})
console.log(transformm.style.opacity)
function minutee(minute){
    if(minute<10){
        return '0'+minute;
    }else{ return minute}
}
audio.addEventListener("timeupdate",()=>{
    const { duration, currentTime } = audio;
    const time=(currentTime/duration)*100
    console.log(currentTime)
    console.log(duration)
    linetime.style.width=`${time}%`;
    const minute=Math.floor(currentTime / 60)
    const second=Math.floor(currentTime % 60)
    if(currentTime==duration){
        playBtn.src="play.png"
        audio.pause()
        if(autoo.style.textShadow== "rgb(245, 118, 139) 0px 0px 10px"){
            continuee()
            playBtn.src="pause.png"
            audio.play()
        }
    }
    timestart.textContent=`${minute}:${minutee(second)}`
})
audio.addEventListener("timeupdate",()=>{
    const {duration}=audio
    var minute=Math.floor(duration / 60)
    var second=Math.floor(duration % 60)
    console.log(minute,second)
    if(Number.isNaN(minute)){minute=0}
    if(Number.isNaN(second)){second=0}
    timeEnd.textContent=`${minute}:${minutee(second)}`
})
playList.addEventListener("click",function(event){
    const duration=audio.duration
    const width=playList.clientWidth
    const clickX=event.offsetX
    audio.currentTime=(clickX/width)*duration
    const time=(currentTime/duration)*100
    linetime.style.width=`${time}%` 
})