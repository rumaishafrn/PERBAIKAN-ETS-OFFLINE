function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var API_req = new XMLHttpRequest();

API_req.open('GET', 'https://pokeapi.co/api/v2/pokemon', true);

API_req.onload = function() {
    if (API_req.status === 200){
        var data = JSON.parse(API_req.responseText);
        console.log(data);

        const body = document.getElementById('isi');

        if (body){
            for (let index = 0; index < data.results.length; index++){
                const pokemon = data.results[index];

                console.log(pokemon.name);

                const card = document.createElement('div');

                card.className = "col-lg-3 col-md-6 col-sm-12";
                card.innerHTML = `
                    <div class="card" id="kartu">
                        <h5 class="card-title" id="judul_kartu">${capitalizeFirstLetter(pokemon.name)}</h5>
                        <a href="${pokemon.url}" class="btn btn-primary" id="buttonnya">Details</a>
                    </div>
                `;
                body.appendChild(card);
            }
        }
    }
};

API_req.send();