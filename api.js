// src/api.js

export const fetchDogBreeds = async () => {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const fetchDogBreedById = async (id) => {
    const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const fetchDogFacts = async () => {
    const response = await fetch('https://dogapi.dog/api/v2/facts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const fetchDogGroups = async () => {
    const response = await fetch('https://dogapi.dog/api/v2/groups');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  
  