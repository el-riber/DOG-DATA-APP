// src/DogFacts.js

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDogFacts } from './api';

function DogFacts() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['dogFacts'],
    queryFn: fetchDogFacts
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
      <h1>Dog Facts</h1>
      <ul>
        {data?.facts?.map((fact, index) => (
          <li key={index}>{fact}</li>
        )) ?? <li>No facts available</li>}
      </ul>
    </div>
  );
}

export default DogFacts;


