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
    // console.log(window.innerHeight)
    arrows.forEach((arrow) => {

        const rect = arrow.getBoundingClientRect(); 
        const path = arrow.querySelector("path");
        const compleatPoint = (window.innerHeight *  .3);
        const length = path.getTotalLength();
        
        if (arrow === arrows[0]) {
            console.log(rect.top);
            console.log(compleatPoint);
            console.log((length * ((rect.top - compleatPoint) / compleatPoint)))
            // console.log((window.innerHeight - rect.top))
            // console.log(compleatPoint)
        }
        
        if (compleatPoint > rect.top) {
            path.style.strokeDashoffset = 0
        } else if (((rect.top - compleatPoint) / compleatPoint) > 1) {
            path.style.strokeDashoffset = length;
        } else {
            path.style.strokeDashoffset = (length * ((rect.top - compleatPoint) / compleatPoint)) ;

        }


        // console.log(imageBottom);
    })
}



window.addEventListener('scroll', debounce(checkSlide))


function debounce(func, wait = 2, immediate = true) {
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

