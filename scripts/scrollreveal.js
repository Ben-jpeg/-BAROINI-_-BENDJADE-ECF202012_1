//Scroll reveal //////////////////////////////////////////
ScrollReveal().reveal('h2', { delay: 200 });
ScrollReveal().reveal('img', { delay: 600 });
ScrollReveal().reveal('article', { delay: 600 });
ScrollReveal().reveal('p', { delay: 600 });
ScrollReveal().reveal('i', { delay: 600 });



//Auto-complétion ////////////////////////////////////////

// je sélectionne dans des constantes les éléments html dont j'ai besoin 
const keyword = document.querySelector("#keyword")
const city = document.querySelector('#ul');

//j'ajoute un évenement 'keyup' à l'élément html 'keyword'
keyword.addEventListener('keyup', (event) => {
    event.preventDefault();

    const url = `https://places-dsn.algolia.net/1/places/query`;
    fetch(url, {
            method: "POST",
            body: JSON.stringify({ query: keyword.value })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            city.innerHTML = '',
                data.hits.forEach(element => {
                    console.log(element.locale_names.default)
                    city.insertAdjacentHTML('beforeend',
                        `<button class= "li">${element.locale_names.default}</button>  `)
                });

        })
        // j'attrappe les éventuelles erreurs pour directement les afficher sur la console
        .catch((err) => {
            console.log(err);
        })

    city.addEventListener('click', (event) => {
        event.preventDefault();
    })

});