import React from "react";

import { Container } from "./style";

const JobPhotos = ({ photos }) => {
  return photos.map((photo) => <Container backgroundImage={photo} />);
};

export default JobPhotos;
