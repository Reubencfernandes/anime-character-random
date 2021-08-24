const fetch = require('node-fetch');
const cheerio = require('cheerio');
let $

exports.getRandomChar = (random) => {

let limitid = Math.floor(Math.random() * 200)

  fetch(`https://myanimelist.net/topanime.php?limit=${limitid}`)
  .then(res => res.text())
  .then(body => {
    //console.log(body)

    $ = cheerio.load(body)
    fetch(encodeURI($('td[class="title al va-t word-break"] > a')[0].attribs.href)).then(res => res.text())
  .then(body => {
    $ = cheerio.load(body)
    let charid = Math.floor(Math.random() * $('h3[class="h3_characters_voice_actors"] > a').length )
    console.log(charid)
    const  title = $('div[class="h1-title"] > div >h1 ')[0].children[0].children[0].data
     const CharName = $('h3[class="h3_characters_voice_actors"] > a')[charid].children[0].data
     fetch(encodeURI($('h3[class="h3_characters_voice_actors"] > a')[charid].attribs.href)).then(res => res.text())
     .then(body => {
      $ = cheerio.load(body)
//console.log($('td[class="borderClass"] > div > a')[0].children[0].attribs)
 const CharImg = $('td[class="borderClass"] > div > a')[0].children[0].attribs['data-src']
//console.log($('td[class="borderClass"] > div > a')[charid].children[0].attribs['data-src'])
const animeCharacter = {
  title,
  CharName,
  CharImg,
  japaneseName:"Will be coming soon"
 }
 random(animeCharacter)
     })
  })
  })
}


