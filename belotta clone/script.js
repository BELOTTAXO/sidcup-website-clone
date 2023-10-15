var crsr =document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    
    crsr.style.left =dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left =dets.x- 175 +"px"
    blur.style.top=dets.y- 175+"px"
})

gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#aboutus img,#about-us-in",{
    y:50,
    opacity:0,
    duration:3,

    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 58%",
       
        
        scrub:3
    }

})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:3
        
    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:3,
        // markers:true

        
    }
})
gsap.from("#page4 h1" ,{
    y: 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
}
})








