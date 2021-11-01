import React from 'react';
import { Button } from 'reactstrap';

export const NextBtn = props => (
  <Button {...props} color="primary">
    Next
  </Button>
);

export const PrevBtn = props => (
  <Button {...props} color="secondary">
    Prev
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

export const CloseBtn = props => (
  <Button {...props} color="secondary">
    Okay
  </Button>
);
