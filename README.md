# anime-character-random  1.0.11V Stable
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
  difficulty: 'Hard',
  title: 'Kami nomi zo Shiru Sekai II',
  name: 'Katsuragi, Keima',
  image: 'https://cdn.myanimelist.net/images/characters/8/122018.jpg',
  tags: [ 'Katsuragi', ' Keima' ],
  japaneseName: '(桂木 桂馬)'
}
```
#### In Case of An Error the Code Will handle things safely instead of making you Create an Error Handler

```js
{
  status : '404',
  message:'Unable To fetch Character Data\n Please Try Again'
}
```

# please note that This APi is For My personal use You are Free To Modify And Edit it. **But u Cant claim it to be yours**

#### Support

[Discord](https://discord.gg/4ftQqQ6)
[github](https://github.com/gco360)

