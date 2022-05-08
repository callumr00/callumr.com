// Set input field as variable
const input = document.querySelector("input");

// Define function
const filterFunction = () => {

    // Set cards variable
    const cards = document.querySelectorAll(".essays__card");

    cards.forEach((item) => {
        // Set tags as variable
        let tags = item.querySelector(".essays__card--tags");

        // Filter where input field text matches tag(s)
        if (tags.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

        // Add stylings to found items
        if (input.value.length > 0) {
            item.style.borderBottom = "1px solid #00ff70"
        } else {
            item.style.borderBottom = ""
        }
    })
}

// Add event listener
input.addEventListener("keyup", filterFunction);