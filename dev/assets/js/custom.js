const buildings = document.querySelectorAll(".building")

const cellAdress = document.getElementById("adress")
const cellFlatsAmount = document.getElementById("flats-amount")
const cellFlatsFree = document.getElementById("flats-free")
const cellFlatsBooked = document.getElementById("flats-booked")
const cellFlatsSold = document.getElementById("flats-sold")

function calcInfo() {
    buildings.forEach(el => {
        let flatsAmount = Number(el.getAttribute("data-flats-amount"))
        let flatsBooked = Number(el.getAttribute("data-flats-booked"))
        let flatsSold = Number(el.getAttribute("data-flats-sold"))

        const flatsFree = flatsAmount - (flatsBooked + flatsSold)
        
        el.setAttribute("data-flats-free", flatsFree)
        
        if (flatsFree === 0) {
            el.classList.add("sold")
            el.addEventListener('click', (event)=> {
                event.preventDefault();
            })
            el.setAttribute("data-modal-triger", "sold")
        }
        
    });
}

calcInfo()

function getInfo(cell, attribute) {
    buildings.forEach(el => {
        el.addEventListener("mouseover", function() {
            const value = el.getAttribute(attribute)
            cell.innerHTML = value
        })
    });
}

getInfo(cellAdress, "data-adress")
getInfo(cellFlatsAmount, "data-flats-amount")
getInfo(cellFlatsFree, "data-flats-free")
getInfo(cellFlatsBooked, "data-flats-booked")
getInfo(cellFlatsSold, "data-flats-sold")