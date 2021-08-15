import React, { useState, useRef, useContext } from 'react';
import { Flex, Grid, Donut, Button, Field, IconButton, jsx } from 'theme-ui';
import { albumContext } from '../contexts/AlbumContext';

export default function CounterController() {
  const [count, setCount] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1);
  const intervalRef = useRef(-1);
  const stateRef = useRef(0);
  const ctx = useContext(albumContext);
  stateRef.current = count;
  const incInterval = () => {
    setIntervalTime((prev) => prev + 1);
  };
  const decInterval = () => {
    if (intervalTime > 0) setIntervalTime((prev) => prev - 1);
  };

  const start = () => {
    if (intervalRef.current !== -1) {
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setCount((c) => c + 1);
      if (stateRef.current % intervalTime === 0) ctx.next();
    }, 1000);
  };
  const stop = () => {
    if (intervalRef.current === -1) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = -1;
  };
  return (
    <Grid>
      <h2>Controller</h2>
      <Field
        label="Count"
        name="count"
        type="number"
        min="1"
        defaultValue="1"
      />
      <Flex>
        <Field
          value={intervalTime}
          label="Interval"
          name="Interval"
          type="number"
          min="1"
          readOnly
        />
        <Grid gap={1} mt="auto">
          <Button variant="smallOutline" onClick={incInterval}>
            ▲
          </Button>
          <Button variant="smallOutline" onClick={decInterval}>
            ▼
          </Button>
        </Grid>
      </Flex>
      <Donut mx="auto" value={(count % intervalTime) / intervalTime} />
      <Button onClick={start}>start</Button>
      <Button variant="secondary" onClick={stop}>
        stop
      </Button>
    </Grid>
  );
}
