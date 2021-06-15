const button = document.querySelector('#Load');
const cardList = document.querySelector('.center__grid')

function renderCard(cardObj) {
    const card = `<div class="card-wrap">
                <div class="card">
                <img class="card__image" src=${cardObj.url} alt="rice">
                    <h2 class="card__title">
                    Dear people, rice is the nice food
                        ${cardObj.title}
                    </h2>
                    <p class="card__text">
                        ${cardObj.title}
                        </h2>
               <div class="row">
                  <p class="card__price">$10<span class="card__special-text"></span>.50</p>
                  <button class="button card__button card_size_small">
                  Buy rice now
                  </button>
               </div>
               <div class="test">
               </div>
               <p class="card__text">
                  If you bought and eat this rice, you will be happier than other people. RICE is the popular eat in Azia and China. Bought this rice if you wanted to eat sushi.
               </p>

               </div>`
    cardList.insertAdjacentHTML('beforeend', card)
    }

function getData() {
        return fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                const json = res.json();
                return json.then(Promise.reject.bind(Promise))
            })
            .catch((err) => {
                throw err;
            })

}
const refresh = () => {
    getData().then((data) => {
        return data.forEach((el) => {
            renderCard(el)
        })
    })
}





