import { loadExternalStyles } from "alem";
import Spinner from "./components/Spinner";

const App = () => {
  const fontsLoaded = loadExternalStyles(["https://fonts.cdnfonts.com/css/display"]);

  const Texts = () => (
    <>
      <p>
        Edit <span>src/index.jsx</span> and save to reload.
      </p>
      <a className="App-link" href="https://alem.dev" target="_blank" rel="noopener noreferrer">
        Learn Além
      </a>
    </>
  );

  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img
            src="https://ipfs.near.social/ipfs/bafkreicjdgat5xsw7vxbosoyygermawhkfi2by3ovg7c6tumrayn4rimty"
            className="App-logo"
            alt="logo"
          />
          {fontsLoaded ? <Texts /> : <Spinner />}
        </div>
      </div>
      <div className="App-bg" />
    </div>
  );
};

export default App;
