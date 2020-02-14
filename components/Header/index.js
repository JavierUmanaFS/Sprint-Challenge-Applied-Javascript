// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Create New Elements
  const header = document.createElement('div'),
        date = document.createElement('span'),
        lambdaTimes = document.createElement('h1'),
        temp = document.createElement('span');

        // Setting up structure of elements
        header.append(date, lambdaTimes, temp);

        // Add classes to elements 
        header.classList.add('header');
        date.classList.add('date');
        temp.classList.add('temp');

        // Set text content
        date.textContent = 'SMARCH 28, 2019';
        lambdaTimes.textContent = 'Lambda Times';
        temp.textContent = '98°';

        return header;
}


const headerContainer = document.querySelector('.header-container')

headerContainer.append(Header())