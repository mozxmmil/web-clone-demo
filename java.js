var cor=document.querySelector(".corsor");
var cor1=document.querySelector(".bigcorsor");
document.addEventListener("mousemove",function(get){
     cor.style.left = get.x+"px"
     cor.style. top= get.y+"px"
     cor1.style.left = get.x-150+"px"
    cor1.style. top= get.y-150+"px"
})


gsap.to(".navbar",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
         trigger:".navbar",
         scroller:"body",
         
         start:"top -10%",
         end:"top -11",
         scrub:1
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        
        start:"top -50%",
        end:"top -100%",
        scrub:3
    }
})

 gsap.to(".class,#page1 h2,h3",{
    y:30,
    duration:1,
    
 })
 gsap.to(".class,#page1 h1",{
    y:-30,
    duration:0.8,
    
 })
 gsap.to("#page2,.about",{
    y:-30,
    scrollTrigger:{
        trigger:"#page2,.about",
        scroller:"body",
        
        start:"top 75%",
        end:"top 65%",
        scrub:3,
    }
    
 })