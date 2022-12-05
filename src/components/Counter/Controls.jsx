import React from 'react';
import { Button, Controls } from './Counter.styled';

const ControlsFn = ({ increment, decrement }) => (
  <Controls>
    <Button type="button" onClick={increment}>
      +1
    </Button>
    <Button type="button" onClick={decrement}>
      -1
    </Button>
  </Controls>
);

export default ControlsFn;
