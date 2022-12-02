const clothesList = document.getElementById('clothesList');
const searchBar = document.getElementById('searchBar');
const filterBar = document.getElementById('filter');

let Clothes = [];

clothesList.style.visibility = 'hidden';
console.log(searchBar);

searchBar.addEventListener('keyup', (e) => {
    clothesList.style.visibility = 'visible'; 
    const searchString = e.target.value.toLowerCase();
    const filteredClothes = Clothes.filter( clothes => {
        return clothes.description.toLowerCase().includes(searchString) || clothes.price.includes(searchString);
    });
    displayClothes(filteredClothes);
});

filterBar.addEventListener('click', (e) => {
    clothesList.style.visibility = 'visible'; 
    const filterString = e.target.value;
    const filteredClothesCards = Clothes.filter( clothes => {
        return clothes.collection.includes(filterString);
    });
    displayClothes(filteredClothesCards);
});


const loadClothes = async () => {
    try {
        const res = await fetch('clothes.json');
        Clothes = await res.json();
        displayClothes(Clothes);
        console.log(Clothes);
    } catch (err) {
        console.error(err);
    }
};

const displayClothes = (clothes) => {
    const htmlString = clothes
        .map((clothes) => {
            return `
            <div class="col">
            <div class="card">
                <img src="${clothes.img}"></img>
                <div class="card-body">
                    <h5 class="title-h6 text-center">${clothes.description}</h5>
                    <p class="title-carddes card-text text-center">${clothes.price}</p>
                </div>
            </div>
            </div>
        `;
        })
        .join('');
    clothesList.innerHTML = htmlString;
    


};

loadClothes();
