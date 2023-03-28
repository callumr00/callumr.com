const cards = document.querySelectorAll(".card")
const tags = document.querySelectorAll(".card__tags")
const ratings = document.querySelectorAll(".rating__value")
const tagsInput = document.getElementById("tagsInput")
const summaryInput = document.getElementById('summaryInput')
const ratingInput = document.querySelectorAll('.rating__input')

tagFilter = ""
summaryFilter = false
ratingFilter = 0

// Show filtered results
updateResults = () => {
    if (summaryFilter == true) {
        for (var i=0; i<document.querySelectorAll(".card").length; i++) {
            cards[i].style.display = ""

            if(
            tags[i].innerText.toUpperCase().match(tagFilter.toUpperCase()) 
            && 
            cards[i].classList.contains("card--link")
            && 
            parseInt(ratings[i].innerText) >= ratingFilter) 
            {
                cards[i].style.display = ""
            } else {
                cards[i].style.display = "none"
            }
        }
    }
    
    if (summaryFilter == false) {
        for (var i=0; i<document.querySelectorAll(".card").length; i++) {
            cards[i].style.display = ""

            if(
            tags[i].innerText.toUpperCase().match(tagFilter.toUpperCase()) 
            && 
            parseInt(ratings[i].innerText) >= ratingFilter) 
            {
                cards[i].style.display = ""
            } else {
                cards[i].style.display = "none"
            }
        }
    }

    updateCount()
}

// Show book count
updateCount = () => {
    var array = [].slice.call(cards)

    var displayNone = array.filter(function(el) {
        return getComputedStyle(el).display === "none"
    });

    var displayShow = array.filter(function(el) {
        return getComputedStyle(el).display !== "none"
    });

    document.querySelector(".count").innerHTML = `${displayShow.length} / ${displayShow.length + displayNone.length}`
}

updateResults()

// Filter by Tags
tagsInput.addEventListener('change', (event) => {
    tagFilter = tagsInput.value
    updateResults()
});

// Only Book Summaries
if (window.location.href.indexOf("summaries") != -1) {
    document.getElementById("summaryInput").checked = true;
    summaryFilter = true
    updateResults()
}

summaryInput.addEventListener('change', (event) => {
    if(!summaryInput.checked) {
        summaryFilter = false
        updateResults()
    } else {
        summaryFilter = true
        updateResults()
    }
});

// Min. Rating
ratingInput[0].addEventListener('change', (event) => {
    ratingInput[0].checked = true
    ratingInput[1].checked = false
    ratingInput[2].checked = false
    ratingInput[3].checked = false
    ratingInput[4].checked = false

    ratingFilter = 2 

    updateResults()
});

ratingInput[1].addEventListener('change', (event) => {
    ratingInput[0].checked = true
    ratingInput[1].checked = true
    ratingInput[2].checked = false
    ratingInput[3].checked = false
    ratingInput[4].checked = false
    
    ratingFilter = 4 
    
    updateResults()
});

ratingInput[2].addEventListener('change', (event) => {
    ratingInput[0].checked = true
    ratingInput[1].checked = true
    ratingInput[2].checked = true
    ratingInput[3].checked = false
    ratingInput[4].checked = false

    ratingFilter = 6 
    
    updateResults()
});

ratingInput[3].addEventListener('change', (event) => {
    ratingInput[0].checked = true
    ratingInput[1].checked = true
    ratingInput[2].checked = true
    ratingInput[3].checked = true
    ratingInput[4].checked = false

    ratingFilter = 8

    updateResults()
});

ratingInput[4].addEventListener('change', (event) => {
    ratingInput[0].checked = true
    ratingInput[1].checked = true
    ratingInput[2].checked = true
    ratingInput[3].checked = true
    ratingInput[4].checked = true

    ratingFilter = 10

    updateResults()
});