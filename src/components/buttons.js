import React from 'react';
import { Button } from 'reactstrap';

export const NextBtn = props => (
  <Button {...props} color="primary">
    Next
  </Button>
);

export const SaveBtn = props => (
  <Button {...props} color="success">
    Save
  </Button>
);

export const RemoveBtn = props => (
  <Button {...props} color="danger" outline>
    Remove
  </Button>
);
