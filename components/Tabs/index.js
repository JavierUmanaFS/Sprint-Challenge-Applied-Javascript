// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
  
  let newTabs = response.data.topics
  newTabs.forEach(e =>{
    const tabItem = document.createElement('div');
    tabItem.classList.add('tab')
    tabItem.textContent = `${e}`
    const tabs = document.querySelector('.topics');
  tabs.append(tabItem)
  })
// console.log(newTabs)
})