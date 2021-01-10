const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

console.log(1);

for (x = 0; x < stars.length; x++) {
    stars[x].starValue = x + 1;
    ["click", "mouseover", "mouseout"].forEach(function(e) {
        stars[x].addEventListener(e, showrating);
    })
}

function showrating(e) {
    let type = e.type;
    let starValue = this.starValue;

    if (type === 'click') {
        if (starValue > 1) {
            output.innerHTML = "You rated this " + starValue + " stars ";
        }
    }

    stars.forEach(function(elem, ind) {
        if (type === 'click') {
            if (ind < starValue) {
                elem.classList.add("orange");
            } else {
                elem.classList.remove("orange");
            }
        }

        if (type === 'mouseover') {
            if (ind < starValue) {
                elem.classList.add("yellow");
            } else {
                elem.classList.remove("yellow");
            }
        }

        if (type === 'mouseout') {
            elem.classList.remove("yellow");
        }
    })
}

function nextpage() {
    window.location.reload();
}