import { useQuery } from "@airstack/airstack-react";
import React from "react";
const getNfts = `
query MyQuery($identity: Identity!) {
  Wallet(input: {identity: $identity, blockchain: ethereum}) {
    tokenBalances {
      tokenNfts {
        address
        metaData {
          image
          name
        }
      }
    }
  }
}
`;
const UserProfile = () => {
  const { data, loading, error } = useQuery(
    getNfts,
    {
      identity: localStorage.getItem("address"),
    },
    { cache: false }
  );
  console.log({
    someData: data,
  });
  return (
    <div className="w-full h-full px-6 py-4 bg-violet-800 flex justify-between items-center gap-2 rounded-xl">
      Profile
    </div>
  );
};

export default UserProfile;
