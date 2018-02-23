
//add projects here
const projects = [
  {
    id: 0,
    image: './images/projects/example.PNG',
    title: 'Tasty Burger',
    techs: 'Javascript,Express.js, Node.js, JawsDB MySQL, Handlebars',
    desc: 'An app demonstrating data persistence using "digital burgers" and JawsDB',
    deployed: 'https://salty-basin-77497.herokuapp.com/',
    github: 'https://github.com/zoosissoos/burger'
  },
  {
    id: 1,
    image: require('../images/projects/example.PNG'),
    title: 'Beer Friend',
    techs: 'Javascript, Node.js, Express.js',
    desc: 'An app that allows the user to be matched to someone with similar tastes',
    deployed: 'https://calm-dusk-49591.herokuapp.com/',
    github: 'https://github.com/zoosissoos/beer-friend'
  },
  {
    id: 2,
    image: require('../images/projects/example.PNG'),
    title: 'Game of Memory',
    techs: 'Javascript, React, Express.js',
    desc: 'A quick game to test memory and demonstrate functional and stateful components',
    deployed: 'https://zoosissoos.github.io/memory-game/',
    github: 'https://github.com/zoosissoos/memory-game'
  },
  {
    id: 3,
    image: require('../images/projects/example.PNG'),
    title: 'Crystal Game',
    techs: 'Javascript, JQuery, CSS',
    desc: 'An earlier app that uses Jquery and Javascript',
    deployed: 'https://github.com/zoosissoos/crystal-game',
    github: 'https://zoosissoos.github.io/crystal-game/'
  }, 
]


export default projects;