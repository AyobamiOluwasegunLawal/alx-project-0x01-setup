import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";

const User: React.FC<UserProps[]> = ({ users }) => {
  console.log(users);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {users?.map(({ address, company, id, name, email, phone, userName, website }: UserProps, key: number) => (
            <UserCard
              address={address}
              company={company}
              key={key}
              email={email}
              id={id}
              name={name}
              phone={phone}
              userName={userName}
              website={website}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/Users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default User;
