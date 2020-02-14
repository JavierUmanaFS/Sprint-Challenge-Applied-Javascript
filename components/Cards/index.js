// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  let newCards = response.data.articles.javascript;
  let newCards2 = response.data.articles.bootstrap;
  let newCards3 = response.data.articles.technology;
  let newCards4 = response.data.articles.jquery;
  let newCards5 = response.data.articles.node;

  newCards.forEach( e =>{
    cardContainer.append(artCards(e))
    // console.log(response.data.articles)
  })

  newCards2.forEach( e =>{
    cardContainer.append(artCards(e))
    // console.log(response.data.articles)
  })

  newCards3.forEach( e =>{
    cardContainer.append(artCards(e))
    // console.log(response.data.articles)
  })

  newCards4.forEach( e =>{
    cardContainer.append(artCards(e))
    // console.log(response.data.articles)
  })

  newCards5.forEach( e =>{
    cardContainer.append(artCards(e))
    // console.log(response.data.articles)
  })
  console.log(newCards2)
})


function artCards(art){
  // Create elements 
  const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        authorsName = document.createElement('span');

        // Setting up structure of elements
        imgContainer.append(img)
        author.append(imgContainer, authorsName)
        card.append(headline, author)

        // Add classes to elements
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');


        // Set text content
        img.src = art.authorPhoto;
        headline.textContent = art.headline;
        authorsName.textContent = `By: ${art.authorName}`;

        return card;
}

const cardContainer = document.querySelector('.cards-container');

// cardContainer.append(artCards())