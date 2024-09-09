const recommends = [];
const btnSearch = document.getElementById('searchButton');


function searchRecommend() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const result = document.getElementById('result');
    result.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {

            if (input ==='temples'){
                const temples = data.temples;

                if(temples.length > 0){
                    temples.forEach(item => {
                        result.innerHTML += `<img src="${item.imageUrl}">`;
                        result.innerHTML += `<h4>${item.name}</h2>`;
                        result.innerHTML += `<p>${item.description}</p>`;
                    });
                }

                else{
                    result.innerHTML = 'No found'
                }
            }


            else if(input ==='beaches'){
                const beaches = data.beaches;

                if(beaches.length > 0){
                    beaches.forEach(item => {
                        result.innerHTML += `<img src="${item.imageUrl}">`;
                        result.innerHTML += `<h4>${item.name}</h2>`;
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
                        result.innerHTML += `<h4>${item.name}</h2>`;
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


    btnSearch.addEventListener('click', searchRecommend);