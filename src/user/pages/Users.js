import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Abhi",
      image: "https://techbillions.com/wp-content/uploads/2022/11/JPG-File.png",
      places: 3,
    },
    {
      id: "u2",
      name: "Abhi",
      image: "https://tinypng.com/images/example-shrunk.png",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
