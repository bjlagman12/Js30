console.log('initial run')

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// store information in cities
const cities = []

// get data from site
async function getCity() {
  // fetch data
  let res = await fetch(endpoint)
  let data = await res.json()
  // use the spread operator to add information to the end of the array
  // pushing without the spread operator will make a nested array
  cities.push(...data)
}
getCity()

// filter data
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // look for a word in the string. g = global; i = must match lowercase and uppercase
    const regex = new RegExp(wordToMatch, 'gi')
    // return the city object that matched in an array
    return place.city.match(regex) || place.state.match(regex)
  });
}

function displayMatches() {
  let group = []
  const match = findMatches(this.value, cities)
  for (var i = 0; i < match.length; i++) {
    // find the value 
    const regex = new RegExp(this.value, 'gi')
    // replace the that value with a span tage with h1
    const cityName = place.city.replace(regex, `
    <span class="h1">${this.value}<span>
    `)
    const stateName = place.state.replace(regex, `
    <span class="h1">${this.value}<span>
    `)
    let place = match[i]
    // create a tag
    let html = `
    <li>
      <span class="name">${cityName}, ${stateName} </span>
      <span class="population">${place.population}</span>
    </li>
    `
    group.push(html)
  }
  let html = group.join('')
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches )




