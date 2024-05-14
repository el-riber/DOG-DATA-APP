// src/BreedDetails.js

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDogBreedById } from './api';

function BreedDetails({ breedId }) {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['breedDetails', breedId],
    queryFn: () => fetchDogBreedById(breedId)
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
      <h2>{data?.breed?.name}</h2>
      <p>{data?.breed?.description}</p>
      <ul>
        {data?.breed?.attributes?.map((attr, index) => (
          <li key={index}>{attr}</li>
        )) ?? <li>No attributes available</li>}
      </ul>
    </div>
  );
}

export default BreedDetails;

