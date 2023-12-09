import React from "react";
import Navbar from "./Navbar";
import Community from "./Community";
import { useQuery } from "@airstack/airstack-react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
const GET_VITALIK_LENS_FARCASTER_ENS = `
query MyQuery($identity:Identity!) {
    Wallet(input: {identity: $identity, blockchain: ethereum}) {
      tokenBalances {
        token {
          tokenNfts {
            address
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  console.log({ address, isConnecting, isDisconnected });
  localStorage.setItem("address", address);
  const { data, loading, error } = useQuery(
    GET_VITALIK_LENS_FARCASTER_ENS,
    {
      identity: address,
    },
    { cache: false }
  );
  console.log({ data });
  return (
    <div className="h-screen w-screen bg-orange-400 p-8 flex justify-between items-center gap-2">
      <ConnectKitButton />
      <Navbar />
      <Community />
    </div>
  );
};

export default Home;
