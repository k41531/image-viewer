import React, { useState, useRef, useContext } from 'react';
import { Flex, Grid, Donut, Button, Label, Radio, Progress } from 'theme-ui';
import { albumContext } from '../contexts/AlbumContext';
import NumberField from './NumberField';
import ShuffleButton from './CustomButton/ShuffleButton';

export default function CounterController() {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1);
  const intervalRef = useRef(-1);
  const stateRef = useRef(0);
  const ctx = useContext(albumContext);
  stateRef.current = count;
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
      <NumberField
        name="Count"
        label="Count"
        value={maxCount}
        setNumber={setMaxCount}
      />
      <Progress max={1} value={count / maxCount} />
      <NumberField
        name="Interval"
        label="Interval"
        value={intervalTime}
        setNumber={setIntervalTime}
      />
      <Flex mb={3}>
        <Label>
          <Radio name="letter" /> H
        </Label>
        <Label>
          <Radio name="letter" /> M
        </Label>
        <Label>
          <Radio name="letter" /> S
        </Label>
      </Flex>
      <Donut mx="auto" value={(count % intervalTime) / intervalTime} />
      <Button onClick={start}>start</Button>
      <Button variant="secondary" onClick={stop}>
        stop
      </Button>
      <ShuffleButton />
    </Grid>
  );
}
