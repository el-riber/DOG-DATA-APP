// src/App.js

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDogBreeds } from './api';
import BreedDetails from './BreedDetails';
import DogFacts from './DogFacts';
import DogGroups from './DogGroups';

function App() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['dogBreeds'],
    queryFn: fetchDogBreeds
  });
  const [selectedBreedId, setSelectedBreedId] = useState(null);

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
      <h1>Dog Data App</h1>
      <ul>
        {data?.breeds?.map((breed) => (
          <li key={breed.id} onClick={() => setSelectedBreedId(breed.id)}>
            {breed.name}
          </li>
        )) ?? <li>No breeds available</li>}
      </ul>
      {selectedBreedId && <BreedDetails breedId={selectedBreedId} />}
      <DogFacts />
      <DogGroups />
    </div>
  );
}

export default App;

