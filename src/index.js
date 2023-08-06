let breeds = []
document.addEventListener("DOMContentLoaded", () => {

console.log('%c HI', 'color: firebrick')

const grabImageContainer = document.getElementById("dog-image-container");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const grabDogBreeds = document.getElementById("dog-breeds");
const grabBreedDropdown = document.getElementById("breed-dropdown");

fetch(imgUrl)
.then(response => response.json())
.then(data => {
    for (const imgUrl of data.message) {
        const img = document.createElement("img");
        img.src = imgUrl;
        grabImageContainer.appendChild(img)
    }
})
.catch(error => console.log(error));

fetch(breedUrl)
.then(response => response.json())
.then(data => {
    console.log(data.message);
    breeds = Object.keys(data.message);
    

        clearList(breeds);
        allTogether();
    
   
        
      })
      .catch(error => console.log(error));
    })
    
    function updateBreedList(breeds) {
        const grabDogBreeds = document.getElementById("dog-breeds")
        for (const breed of breeds) {
            const li = document.createElement("li");
            li.innerText = breed;
            grabDogBreeds.appendChild(li);
            li.addEventListener("click", () => {
                li.style.color = "red";
            });
        
        }
    }
    function selectedBreeds(letter){
        let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
        clearList(filteredBreeds)
        console.log(filteredBreeds)
    }
    function clearList(breeds){
        const grabDogBreeds = document.getElementById("dog-breeds")

            removeChildren(grabDogBreeds);
            updateBreedList(breeds);
    }
    function allTogether() {
        const dropdown = document.getElementById("breed-dropdown");
        dropdown.addEventListener("change", (e) => {
            console.log(selectedBreeds(e.target.value));
        })
    }
    function removeChildren(element){
        let child = element.lastElementChild;
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }