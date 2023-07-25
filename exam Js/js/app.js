const countdown = ()=>{
    const date = new Date('July 25, 2024 00:00:00').getTime()
    const now =new Date().getTime()
    
    const difference= date-now
    // console.log(difference)

    const seconds = 1000
    const minutes= seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor(difference / days)
    let timeHours = Math.floor((difference % days)/ hours)
    let timeMinutes = Math.floor((difference % hours)/ minutes)
    let timeSeconds = Math.floor((difference%minutes) / seconds)
    
    timeHours = timeHours < 10 ? '0' + timeHours : timeHours
    timeDays = timeDays < 10 ? '0' + timeDays : timeDays
    timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes
    timeSeconds= timeSeconds < 10 ? '0' + timeSeconds : timeSeconds


    document.querySelector('.days .value').innerHTML=timeDays
    document.querySelector('.hours .value').innerHTML=timeHours
    document.querySelector('.minutes .value').innerHTML=timeMinutes
    document.querySelector('.seconds .value').innerHTML=timeSeconds

}

countdown()
setInterval(countdown, 1000)
let sliderButton = document.querySelectorAll(".slider-part svg")
let sliders = document.querySelector(".slides-inner")
let index = 0

sliderButton[1].addEventListener("click", () => {
    if(index >= 2){
        index = 0
    }else{
        index++
    }

    sliders.style.transform = `translateX(-${index * 100}%)`
})

sliderButton[0].addEventListener("click", () => {
    if(index <= 0){
        index = 2
    }else{
        index--
    }

    sliders.style.transform = `translateX(-${index * 100}%)`
})



let imgContent = document.querySelectorAll('.tab-img  img');
let sectionText = document.querySelectorAll('.tab-content .content-text')
let tabLink = document.querySelectorAll('.tab-change p')



function tabContent(value, index){
    value.forEach(slide => {
        slide.classList.remove("active")
    })

    if(value == imgContent){
        value[index].classList.add("active")
        value[index + imgContent.length / 3].classList.add("active")
        value[index + imgContent.length / 3 * 2].classList.add("active")
    }else{
        value[index].classList.add("active")
    }
}

tabLink.forEach((value, index) => {
    value.addEventListener("click", () => {
        tabContent(tabLink, index)
        tabContent(imgContent, index)
        tabContent(sectionText, index)
    })
})
