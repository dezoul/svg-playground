const body = document.querySelector("body")
const arrows = document.querySelectorAll('.arrow-parent .guideDiv');
const bob = "well that work"
const guideDiv = [...arrows]
// console.log(guideDiv)

// console.log(guideDiv)

arrows.forEach(arrow => {
    var path = arrow.querySelector("path");
    var length = path.getTotalLength();
    console.log(length)
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

})

function checkSlide(e) {
    console.log(window.innerHeight)
    arrows.forEach((arrow) => {
        var rect = arrow.getBoundingClientRect(); 
        var path = arrow.querySelector("path");
        var halfWindow = window.innerHeight / 2
        var length = path.getTotalLength();
        
        // console.log(window.innerHeight / 2)
        console.log(rect.top)
        // console.log(length)
        console.log(rect.top / halfWindow)
        
        if (halfWindow > rect.top) {
            path.style.strokeDashoffset = 0
        } else if ((window.innerHeight * .75 ) < rect.top) {
            path.style.strokeDashoffset = length;
        } else {
            path.style.strokeDashoffset = (length * ((rect.top - halfWindow)) / (halfWindow));

        }


        // console.log(imageBottom);
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




// function checkSlide(e) {
//     images.forEach(sliderImage => {

//         // half visable from the bottom point of each image 
//         const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//         // the bottom of the image
//         const imageBottom = sliderImage.offsetTop + sliderImage.height;
//         const isHalfShown = slideInAt > sliderImage.offsetTop;
//         const isNotScrolledPast = window.scrollY < imageBottom;
//         if (isHalfShown && isNotScrolledPast) {
//             sliderImage.classList.add('active')
//         } else {
//             sliderImage.classList.remove('active')
//         }
//         console.log(sliderImage.height);
//     })
// }