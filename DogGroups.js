// src/DogGroups.js

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDogGroups } from './api';

function DogGroups() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['dogGroups'],
    queryFn: fetchDogGroups
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Debugging output to understand the structure of the data
  console.log(data);

  return (
    <div>
      <h1>Dog Groups</h1>
      <ul>
        {data?.groups?.map((group, index) => (
          <li key={index}>{group.name}</li>
        )) ?? <li>No groups available</li>}
      </ul>
    </div>
  );
}

export default DogGroups;

