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
  const incCount = () => {
    setCount((prev) => prev + 1);
  };
  const decCount = () => {
    if (count > 0) setCount((prev) => prev - 1);
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
  const handleChangeCount = (event: React.FormEvent) => {
    const value = event.target.value.replace(/\+|-/gi, '');
    setCount(Number(value));
  };

  const handleChangeInterval = (event: React.FormEvent) => {
    const value = event.target.value.replace(/\+|-/gi, '');
    setIntervalTime(Number(value));
  };

  return (
    <Grid>
      <h2>Controller</h2>
      <Flex>
        <Field
          label="Count"
          name="count"
          type="text"
          pattern="[0-9]*"
          value={count}
          onInput={handleChangeCount}
        />
        <Grid gap={1} mt="auto">
          <Button variant="smallOutline" onClick={incCount}>
            ▲
          </Button>
          <Button variant="smallOutline" onClick={decCount}>
            ▼
          </Button>
        </Grid>
      </Flex>
      <Flex>
        <Field
          value={intervalTime}
          label="Interval"
          name="Interval"
          type="text"
          pattern="[0-9]*"
          onInput={handleChangeInterval}
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
