const images = document.querySelectorAll
(".imgcontainer img")


let options = {
    rootMargin: "-15% 0px",
    threshold: 0
}

function Intersect(entries){
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }
    })
}

const observer = new IntersectionObserver
(Intersect, options)


images.forEach(image => {
    observer.observe(image)
})