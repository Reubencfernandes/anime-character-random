/* Beta Version Of Package */

const fetch = require('node-fetch');
const cheerio = require('cheerio');
let $
const message = 
{
  status : '404',
  message:'Unable To fetch Character Data\n Please Try Again'
}
exports.getRandomChar = (random) => {

let limitid = Math.floor(Math.random() * 700)

  fetch(`https://myanimelist.net/topanime.php?limit=${limitid}`)
  .then(res => res.text())
  .then(body => {
    console.log("ありがとうございます")

    $ = cheerio.load(body)
    console.log($('td[class="title al va-t word-break"] > a')[0].attribs.href)
    fetch(encodeURI($('td[class="title al va-t word-break"] > a')[0].attribs.href)).then(res => res.text())
  .then(body => {
    $ = cheerio.load(body)
    let charid = Math.floor(Math.random() * $('h3[class="h3_characters_voice_actors"] > a').length )
    console.log(charid)
    const  title = $('div[class="h1-title"] > div >h1 ')[0].children[0].children[0].data
     const name = $('h3[class="h3_characters_voice_actors"] > a')[charid].children[0].data
     console.log($('h3[class="h3_characters_voice_actors"] > a')[charid].attribs.href)
     fetch(encodeURI($('h3[class="h3_characters_voice_actors"] > a')[charid].attribs.href)).then(res => res.text())
     .then(body => {
      $ = cheerio.load(body)
 const image = $('td[class="borderClass"] > div > a')[0].children[0].attribs['data-src']
 // for japanese name
 console.log($('h2[class="normal_header"] > span >small')[0].children[0].data); 
 let japaneseName 
  if($('h2[class="normal_header"] > span >small')[0].children[0].data !== undefined)
 japaneseName = $('h2[class="normal_header"] > span >small')[0].children[0].data
 else
 japaneseName = "Null"
 console.log(japaneseName,title)
 
//console.log($('td[class="borderClass"] > div > a')[charid].children[0].attribs['data-src'])
let arraydata = [name.split(',')[0],name.split(',')[1]]
if(arraydata[1] === undefined)
arraydata[1] = arraydata[0]

const animeCharacter = {
  difficulty:calculateRange(limitid),
  title,
  name,
  image,
  tags : arraydata,
  japaneseName
 }
 console.log(animeCharacter)
     })
  }).catch(() => {
    console.log('I couldnt Fetch The character')
    //random(message)
  })
  }).catch(() => console.log('I Couldnt Fetch the character Img'))
}  

function calculateRange(id)
{

  if(id<=50)
  return "very Easy"
  else if(id>50 && id<=150)
  return "Easy"
  else if(id>150 && id<=350)
  return "Medium"
  else if(id>350)
  return "Hard"
}