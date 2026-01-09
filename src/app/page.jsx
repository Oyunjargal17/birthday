"use client";

import { useState } from "react";
export default function Home() {
  return (
    <div className="bg-pink-100 h-screen flex justify-center items-center">
      {<BirthdayList />}
    </div>
  );
}
const birthday = [
  {
    id: 1,
    name: "Bertie Yates",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 29,
  },
  {
    id: 2,
    name: "Hester Hogan",
    image:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1641&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 32,
  },
  {
    id: 3,
    name: "Larry Little",
    image:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 36,
  },
  {
    id: 4,
    name: "Sean Walsh",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 34,
  },
  {
    id: 5,
    name: "Lola Gardner",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 29,
  },
];

const BirthdayList = () => {
  const [birthdayList, setBirthdayList] = useState(birthday);
  const clearList = () => {
    setBirthdayList([]);
  };
  return (
    <div className="p-10 bg-white">
      <h1 className="text-3xl font-semibold mb-8">Birthday Today</h1>
      <div className="flex flex-col gap-4">
        {birthdayList.map(({ id, name, age, image }) => (
          <BirthdayListItem key={id} name={name} age={age} image={image} />
        ))}
      </div>
      <button
        onClick={clearList}
        className="bg-pink-300 text-white w-full p-3 font-semibold text-xl cursor-pointer"
      >
        Clear All
      </button>
    </div>
  );
};

const BirthdayListItem = ({ name, age, image }) => {
  return (
    <div className="flex gap-4 items-center w-134">
      <img className="w-20 h-20 rounded-full" src={image} alt="profile" />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">{age}</p>
      </div>
    </div>
  );
};
