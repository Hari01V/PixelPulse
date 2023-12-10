import React from "react";
import { useQuery } from "@airstack/airstack-react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const getTokenNfts = `
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
    getTokenNfts,
    {
      identity: address,
    },
    { cache: false }
  );
  console.log({ data });

  return (
    <div className="w-full h-full p-16 bg-gray-800 text-[#cfcfcf] flex flex-col justify-start items-start gap-2 rounded-xl">
      <div className="mb-8 flex justify-start items-start">
        <div className="w-[60%] flex flex-col justify-start items-start gap-2">
          <h1 className="text-[100px] leading-[100px] font-bold uppercase tracking-widest m-0">Pixel</h1>
          <h1 className="text-[100px] leading-[100px] font-bold uppercase tracking-widest m-0">Pulse</h1>
          <p className="text-[16px] text-left tracking-wide mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros ligula, accumsan lobortis massa a, feugiat fermentum dolor. Nulla facilisi. Pellentesque aliquam lectus quis erat aliquet tempor. Fusce condimentum eu sapien id imperdiet. In sed tellus quam. Maecenas vehicula mauris rutrum eros euismod consequat.
          </p>
        </div>
        <div className="flex-grow h-full flex justify-center items-center relative">
          <div className="eth">
            <div className="bottom">
              <div className="left"></div>
              <div className="right"></div>
              <div className="up"></div>
              <div className="down"></div>
            </div>
            <div className="top">
              <div className="left"></div>
              <div className="right"></div>
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <span className="text-[14px] text-left tracking-widest py-2">
          User LogIn/LogOut:
        </span>
        <ConnectKitButton />
      </div>
    </div>
  );
};

export default Home;
