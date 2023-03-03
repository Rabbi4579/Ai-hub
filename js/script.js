// All data load
let count = 0;
const allDataLoad = async () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data)
    showLoadedData(data.data.tools)
}

//Show all loaded data

const showLoadedData = (data) => {
    const container = document.getElementById('card-container');
    container.textContent = '';
    if(data.length > 10){
        data = data.slice(0, 6)
       const showAll = document.getElementById('show-more');
       showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }

    data.forEach(element => {
        console.log(element)
        const filtered = element.features.filter(f => f => 0)
        const li = filtered.map(f => '<li>' + f + '</li>');

        const { image, name,published_in} = element;

        
        count += 1;
        const div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = `
        <div class="card h-100">
        <img src="${image}" class="card-img-top " style="height: 220px;" alt="...">
        <div class="card-body">
            <h5 class="card-title fs-2">Features</h5>
            <p class="card-text list-unstyled">${li}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <div>
            <h3>${name}</h3>
            <p>${published_in}</p>
            </div>
            <button  style="width: 40px; height: 40px;" class=" rounded"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
        `;
        container.appendChild(div)
    });
}

// show more button
document.getElementById('button-show-all').addEventListener('click', function(){
    console.log('click')
    allDataLoad()
});

allDataLoad()