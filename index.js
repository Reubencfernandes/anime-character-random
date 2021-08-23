const fetch = require('node-fetch');
const cheerio = require('cheerio');
let $

let limitid = Math.floor(Math.random() * 200)

  fetch(`https://myanimelist.net/topanime.php?limit=${limitid}`)
  .then(res => res.text())
  .then(body => {
    //console.log(body)

    $ = cheerio.load(body)
    fetch($('td[class="title al va-t word-break"] > a')[0].attribs.href).then(res => res.text())
  .then(body => {
    $ = cheerio.load(body)
    let charid = Math.floor(Math.random() * $('h3[class="h3_characters_voice_actors"] > a').length )
    console.log(charid)
     console.log($('div[class="h1-title"] > div >h1 ')[0].children[0].children[0].data)
     console.log($('h3[class="h3_characters_voice_actors"] > a')[charid].children[0].data)
    console.log($('h3[class="h3_characters_voice_actors"] > a')[charid].children[0].data)

     fetch($('h3[class="h3_characters_voice_actors"] > a')[charid].attribs.href).then(res => res.text())
     .then( body => {
      $ = cheerio.load(body)
//console.log($('td[class="borderClass"] > div > a')[0].children[0].attribs)
let CharImg = $('td[class="borderClass"] > div > a')[0].children[0].attribs['data-src']
console.log(CharImg)
//console.log($('td[class="borderClass"] > div > a')[charid].children[0].attribs['data-src'])
     })

  })
  });  


  ///(const animeCharacter = {
   // title,CharName,CharImg
 // }

