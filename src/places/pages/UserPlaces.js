import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Hazaribag",
    description: "The city of thousand  Garden",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipP2TEby160LsvNcZacevbEf6NuCXzGx6iL0joS8=w408-h306-k-no",
    address: "297V+PJ9, Hazaribagh, Jharkhand 825301",
    location: {
      lat: 24.0142829,
      lng: 85.3898976,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Hazaribag",
    description: "The city of thousand  Garden",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipP2TEby160LsvNcZacevbEf6NuCXzGx6iL0joS8=w408-h306-k-no",
    address: "297V+PJ9, Hazaribagh, Jharkhand 825301",
    location: {
      lat: 23.993948,
      lng: 85.2300026,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
