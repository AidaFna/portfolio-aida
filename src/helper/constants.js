import catchPokemon from '../assets/images/catch-pokemon.jpg';
import movieApp from '../assets/images/movie-app.jpg';
import figmaPorto from '../assets/images/figma-porto.jpg';

export const projectItems = [
  {
    id: 1,
    img: catchPokemon,
    title: 'Catch Pokemon',
    tags: ['reactjs', 'PWA', 'pokemon', 'minigame'],
    link: 'https://mypokemon-catcher.vercel.app/',
    desc: 'This is a Pokémon-themed web app built with React.js, where users can search for and collect Pokéballs. Players can click on Pokéballs to try catching Pokémon, with the outcome being either a successful capture or a miss. If successful, they can give their Pokémon a custom name. This project is also a Progressive Web App (PWA), making it installable and downloadable directly from the browser for a smooth, app-like experience.',
  },
  {
    id: 1,
    img: movieApp,
    title: 'Movie App',
    tags: ['react js', 'PWA', 'movieAPI', 'info'],
    link: 'https://movie-app-aidafna.vercel.app/',
    desc: 'This is a movie list web app built with React.js, providing up-to-date movie information from a movie API. Users can browse and explore the latest films. The app is also a Progressive Web App (PWA), meaning it can be installed and downloaded directly from the browser for an app-like experience.',
  },
  {
    id: 1,
    img: figmaPorto,
    title: 'Figma Portfolio',
    tags: ['figma', 'uiDesign', 'webDesign', 'mobileDesign', 'autoLayout'],
    link: 'https://www.figma.com/proto/dUpKzzdT1235Ha7bUh3cvt/Portfolio-UI%2FUX-Designer---Aida-Amrina?node-id=14-132&node-type=frame&t=x18Pg5ZvY1MFBUoy-0&scaling=scale-down-width&content-scaling=fixed&page-id=14%3A131&starting-point-node-id=14%3A132',
    desc: 'This portfolio showcases my interest in UI design and consists of a collection of app designs created in Figma.  It includes redesigns of popular apps like Starbucks and Netflix, as well as a revamped version of the Olivia Bakery website, aimed at making it more efficient and visually appealing. It highlights my ability to craft user-friendly and visually appealing interfaces for web and mobile applications.',
  },
];

export const skills = ['React JS', 'PWA', 'CSS/HTML', 'Bootstrap', 'Redux', 'Git', 'Figma', 'UI Design', 'Auto Layout'];
