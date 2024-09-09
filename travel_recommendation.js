const recommends = [];
const btnSearch = document.getElementById('searchButton');
const btnReset = document.getElementById('resetButton');
const recommendInfo = document.querySelector('.recommendInfo');
const input = document.getElementById('searchInput');

function searchRecommend() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const result = document.getElementById('result');
    result.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        recommendInfo.style.display = 'block';
            if (input ==='temples' || input === 'temple'){
                const temples = data.temples;

                if(temples.length > 0){
                    temples.forEach(item => {
                        result.innerHTML += `<img src="${item.imageUrl}">`;
                        result.innerHTML += `<h2>${item.name}</h2>`;
                        result.innerHTML += `<p>${item.description}</p>`;
                    });
                }

                else{
                    result.innerHTML = 'No found'
                }
            }


            else if(input ==='beaches' || input === 'beach'){
                const beaches = data.beaches;

                if(beaches.length > 0){
                    beaches.forEach(item => {
                        result.innerHTML += `<img src="${item.imageUrl}">`;
                        result.innerHTML += `<h2>${item.name}</h2>`;
                        result.innerHTML += `<p>${item.description}</p>`;
                    });
                }

                else{
                    result.innerHTML = 'No found'
                }
            }
            

            

            else{

                const country = data.countries.find(item => item.name.toLowerCase() === input);

                if(country){
                    country.cities.forEach(item =>{
                        result.innerHTML += `<img src="${item.imageUrl}">`;
                        result.innerHTML += `<h2>${item.name}</h2>`;
                        result.innerHTML += `<p>${item.description}</p>`;
                    });
                }

                else{
                    result.innerHTML = 'Not found.';
                }
            }

  })

  .catch(error =>{
        console.error('Error: ', error)
        result.innerHTML = 'An error ocurred while fetching data.';
  });
}

function resetSearch() {
    input.value = ''; 
    result.innerHTML = ''; 
    recommendInfo.style.display = 'none'; 
}

    btnSearch.addEventListener('click', searchRecommend);
    btnReset.addEventListener('click', resetSearch )