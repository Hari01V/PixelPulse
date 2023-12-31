import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Home from "./Components/Home";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import CommunityContainer from "./Components/CommunityContainer";
import BrowsePage from "./Components/BrowsePage";
import UserProfile from "./Components/UserProfile";

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
  const [currentNav, setCurrentNav] = useState("home");

  return (
    <div className="App h-screen w-screen p-8 flex justify-between items-center gap-2 relative">
      <div className="w-full h-full absolute top-0 left-0 -z-10">
        {new Array(100).fill('').map(() => (
          <div className="snow"></div>
        ))}
      </div>
      <WagmiConfig config={config}>
        <ConnectKitProvider
          theme="nouns"
          options={{
            customAvatar: MyCustomAvatar,
          }}
        >
          <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/communities" element={<CommunityContainer />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
