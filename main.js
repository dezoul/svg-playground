const arrows = document.querySelectorAll('.arrow-parent .guideDiv')
const bob = "well that work"
const guideDiv = [...arrows]
console.log(guideDiv)

arrows.forEach(arrow => {
    var path = arrow.querySelector("path");
    var length = path.getTotalLength();
    console.log(length)
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

})

function checkSlide(e) {
    guideDiv.forEach(sliderImage => {
        const rect = sliderImage.getBoundingClientRect()
        // half visable from the bottom point of each image 
        const slideInAt = (window.scrollY + window.innerHeight) - rect.height / 2;
        // the bottom of the image
        const imageBottom = sliderImage.offsetTop + rect.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
            sliderImage.classList.remove('deActive')
        } else {
            // sliderImage.classList.remove('active')
            // sliderImage.classList.add('deActive')
        }

        console.log(sliderImage.offsetTop);
    })
}



window.addEventListener('scroll', debounce(checkSlide))


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

