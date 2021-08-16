import React, { useState, useRef, useContext } from 'react';
import {
  Flex,
  Grid,
  Donut,
  Button,
  Field,
  Label,
  Radio,
  Progress,
} from 'theme-ui';
import { albumContext } from '../contexts/AlbumContext';

export default function CounterController() {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
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
  const incMax = () => {
    setMaxCount((prev) => prev + 1);
  };
  const decMax = () => {
    if (count > 0) setMaxCount((prev) => prev - 1);
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
  const handleChangeMax = (event: React.FormEvent) => {
    const value = event.target.value.replace(/\+|-/gi, '');
    setMaxCount(Number(value));
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
          value={maxCount}
          onInput={handleChangeMax}
        />
        <Grid gap={1} mt="auto">
          <Button variant="smallOutline" onClick={incMax}>
            ▲
          </Button>
          <Button variant="smallOutline" onClick={decMax}>
            ▼
          </Button>
        </Grid>
      </Flex>
      <Progress max={1} value={count / maxCount} />
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
    </Grid>
  );
}
