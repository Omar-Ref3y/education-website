const navColor=document.querySelector("nav")

window.addEventListener("scroll",()=>{
navColor.classList.toggle('window_scroll',window.scrollY>0)
})
const faqOpen=document.querySelectorAll(".faq")
faqOpen.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open")
        let icon=faq.querySelector(".faq_icon i")
        if (icon.className==="uil uil-plus") {
            icon.className="uil uil-minus"
        }else{
            icon.className="uil uil-plus"
        }
        setTimeout(() => {
            faq.classList.remove("open")
            icon.className="uil uil-plus"
        }, 10000);
    })
})

  const navMenu=document.querySelector(".nav_menu")
  const menuBtn=document.querySelector("#open-menu-btn")
  const closeBtn=document.querySelector("#close-menu-btn")
  menuBtn.addEventListener("click",()=>{
    navMenu.style.display="block"
    closeBtn.style.display="inline-block"
    menuBtn.style.display="none"
  })
  closeBtn.addEventListener("click",()=>{
    navMenu.style.display="none"
    menuBtn.style.display="inline-block"
    closeBtn.style.display="none"
  })
  const counterEl=document.querySelectorAll(".counter")
  counterEl.forEach(ele=>{
    ele.innerText="0"

    function increment() {
      let currentNum= +ele.innerText
      const dataCeil= +ele.getAttribute("data-ceil")
      const increase=dataCeil / 26
      
      if(currentNum < dataCeil){
        currentNum=Math.floor(currentNum + increase) ;
        ele.innerText=currentNum;
        setTimeout(increment,15)
      }else{
        ele.innerText=dataCeil
      }
    }
    increment()
  })

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });