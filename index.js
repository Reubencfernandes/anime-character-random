const fetch = require('node-fetch');
const cheerio = require('cheerio');
let $
const message = 
{
  status : '404',
  message:'Couldnt Fetch Anything please Try Again'
}
exports.getRandomChar = (random) => {

let limitid = Math.floor(Math.random() * 300)

  fetch(`https://myanimelist.net/topanime.php?limit=${limitid}`)
  .then(res => res.text())
  .then(body => {
    //console.log(body)

    $ = cheerio.load(body)
    console.log($('td[class="title al va-t word-break"] > a')[0].attribs.href)
    fetch(encodeURI($('td[class="title al va-t word-break"] > a')[0].attribs.href)).then(res => res.text())
  .then(body => {
    $ = cheerio.load(body)
    let charid = Math.floor(Math.random() * $('h3[class="h3_characters_voice_actors"] > a').length )
    console.log(charid)
    const  title = $('div[class="h1-title"] > div >h1 ')[0].children[0].children[0].data
     const name = $('h3[class="h3_characters_voice_actors"] > a')[charid].children[0].data
     fetch(encodeURI($('h3[class="h3_characters_voice_actors"] > a')[charid].attribs.href)).then(res => res.text())
     .then(body => {
      $ = cheerio.load(body)
 const image = $('td[class="borderClass"] > div > a')[0].children[0].attribs['data-src']
//console.log($('td[class="borderClass"] > div > a')[charid].children[0].attribs['data-src'])
let arraydata = [name.split(',')[0],name.split(',')[1]]

const animeCharacter = {
  difficulty:"null",
  title,
  name,
  image,
  tags : arraydata,
  japaneseName:"Will be coming soon"
 }
 random(animeCharacter)
     })
  }).catch(() => {
    console.log('I couldnt Fetch The character')
    random(message)
  })
  }).catch(() => console.log('I Couldnt Fetch the character Img'))
}  


