# anime-character-random (1.0.9V LTS)
#### example

`npm install anime-character-random`

```js
const animeCharacter = require('anime-character-random')
animeCharacter.getRandomChar(function (anime) {

console.log(anime)
    
})
```
#### will Output

```js
{
  status:'200',
  difficulty: 'null',
  title:'Naruto',
  name: 'Kakashi Hatake',
  image:'https://cdn.myanimelist.net/images/characters/7/284129.jpg',
  tags: ['Kakashi', 'Hatake'],
  japaneseName:"Will be coming soon"
}
```
#### In Case of An Error the Code Will handle things safely instead of making you Create an Error Handler

```js
{
  status : '404',
  title:'Couldnt Fetch Anything please Try Again',  
  name:'Couldnt Fetch Anything please Try Again',
  image:'https://storage.googleapis.com/support-forums-api/attachment/thread-12124675-17665953907180743904.png',
  tags : ['エルロ','Error'],
  japaneseName:"Couldnt Fetch Anything please Try Again"
}
```

# please note that This APi is For My personal use You are Free To Modify And Edit it. **But u Cant claim it to be yours**

#### Support

[Discord](https://discord.gg/4ftQqQ6)
[github](https://github.com/gco360)

