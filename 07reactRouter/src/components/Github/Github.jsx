import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
const data = useLoaderData();
console.log(data,'data')

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/mostafizur64")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data.followers);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers :{data?.followers || 0}
      <img
        src={
          "https://avatars.githubusercontent.com/u/57724389?v=4" ||
          data?.avatar_url
        }
        alt="Git picture"
        width={300}
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mostafizur64")
  return response.json();
};
