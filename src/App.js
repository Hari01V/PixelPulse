import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.REACT_APP_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
    appName: "PixelPulse",
  })
);
const MyCustomAvatar = ({ address, ensImage, ensName, size, radius }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: radius,
        height: size,
        width: size,
        background: "purple", // your function here
      }}
    >
      {ensImage && (
        <img
          src={ensImage}
          alt={ensName ?? address}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <WagmiConfig config={config}>
        <ConnectKitProvider
          theme="nouns"
          options={{
            customAvatar: MyCustomAvatar,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
