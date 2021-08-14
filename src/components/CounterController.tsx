import React, { useState, useRef, useContext } from 'react';
import { Donut, Button, Field, IconButton, jsx } from 'theme-ui';
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
    <div>
      <Donut value={(count % intervalTime) / intervalTime} />
      <Button onClick={start}>start</Button>
      <Button onClick={stop}>stop</Button>
      <Field
        label="Count"
        name="count"
        type="number"
        min="1"
        defaultValue="1"
      />
      <Field
        value={intervalTime}
        label="Interval"
        name="Interval"
        type="number"
        min="1"
        readOnly
      />
      <Button onClick={incInterval}>up</Button>
      <Button onClick={decInterval}>down</Button>
    </div>
  );
}
