import React from "react";
import Button from "../Button";
import JobPhotos from "./JobPhotos";

import { Container } from "./style";

const Jobs = ({ data }) => {
  return (
    <Container>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Button type="button" value="Veja mais" />
      </div>

      <div>
        <JobPhotos photos={data.photos} />
      </div>
    </Container>
  );
};

export default Jobs;
