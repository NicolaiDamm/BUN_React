import reactLogo from '../assets/dune.png'

export default function Index() {
    return (
      <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
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