import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default UsersPage;
