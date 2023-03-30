import { paintings } from '../paintings';

export default function Index() {
    return (
      <div>
        <h1>SapphInk's Lair of Wonders</h1>
      {/* <img src={paintings[getRandomInt(0, paintings.length)].imgSource}/> */}
      <div style={{backgroundImage: `url(${paintings[getRandomInt(0, paintings.length)].imgSource})`}} height="1000">
        <h2>TEEEST</h2>
      </div>
      <p id="zero-state">
        This is a demo for React Router.
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">
          the docs at reactrouter.com
        </a>
        .
      </p>
      </div>
    );
  }


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }