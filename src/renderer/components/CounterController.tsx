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
  const countRef = useRef(0);
  const ctx = useContext(albumContext);
  countRef.current = count;

  const reset = () => {
    if (intervalRef.current !== -1) {
      clearInterval(intervalRef.current);
      intervalRef.current = -1;
    }
    setCount(0);
  };

  const start = () => {
    if (intervalRef.current !== -1) {
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setCount((c) => c + 1);
      if (maxCount && Math.floor(countRef.current / intervalTime) === maxCount)
        reset();
      else if (countRef.current % intervalTime === 0) ctx.next();
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
      <Progress max={1} value={Math.floor(count / intervalTime) / maxCount} />
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
      <Button variant="secondary" onClick={reset}>
        Reset
      </Button>
      <ShuffleButton />
    </Grid>
  );
}
