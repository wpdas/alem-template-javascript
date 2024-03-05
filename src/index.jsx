import { loadFonts } from "alem/theme";
import Spinner from "./components/Spinner";

const App = () => {
  const fontsLoaded = loadFonts(["https://fonts.cdnfonts.com/css/display"]);

  const Texts = () => (
    <>
      <p>
        Edit <span>src/App.tsx</span> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://near.org/alem-lib.near/widget/Index"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Alem
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
