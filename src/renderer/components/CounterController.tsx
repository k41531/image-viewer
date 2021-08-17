import { FormEvent, useState, useRef, useContext } from 'react';
import {
  Flex,
  Grid,
  Donut,
  IconButton,
  Label,
  Radio,
  Progress,
} from 'theme-ui';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';
import { albumContext } from '../contexts/AlbumContext';
import NumberField from './NumberField';
import ShuffleButton from './CustomButton/ShuffleButton';
import Dropdown from './Dropdown';

export default function CounterController() {
  const [count, setCount] = useState(0);
  const [unit, setUnit] = useState(1);
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
    setCount(1);
    intervalRef.current = window.setInterval(() => {
      setCount((c) => c + 1);
      if (
        maxCount &&
        Math.floor(countRef.current / (intervalTime * unit)) === maxCount + 1
      )
        reset();
      else if (countRef.current % (intervalTime * unit) === 0) ctx.next();
    }, 1000);
  };
  const stop = () => {
    if (intervalRef.current === -1) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = -1;
  };
  const handleChange = (e: FormEvent) => {
    const { value } = e.target;
    setUnit(Number(value));
  };

  return (
    <Grid>
      <h2>Image Player</h2>
      <Donut
        mx="auto"
        value={(count % (intervalTime * unit)) / (intervalTime * unit)}
      />
      <Progress max={1} value={count / (intervalTime * unit) / maxCount} />
      <Flex sx={{ justifyContent: 'space-evenly' }}>
        <IconButton onClick={start}>
          <FaPlay />
        </IconButton>
        <IconButton onClick={stop}>
          <FaPause />
        </IconButton>
        <IconButton onClick={reset}>
          <FaStop />
        </IconButton>
      </Flex>
      <ShuffleButton />
      <Dropdown>
        <NumberField
          name="Count"
          label="Count"
          value={maxCount}
          setNumber={setMaxCount}
        />
        <NumberField
          name="Interval"
          label="Interval"
          value={intervalTime}
          setNumber={setIntervalTime}
        />
        <Flex mb={3}>
          <Label>
            <Radio name="units" value={60 * 60} onChange={handleChange} /> H
          </Label>
          <Label>
            <Radio name="units" value={60} onChange={handleChange} /> M
          </Label>
          <Label>
            <Radio
              name="units"
              defaultChecked
              value={1}
              onChange={handleChange}
            />{' '}
            S
          </Label>
        </Flex>
      </Dropdown>
    </Grid>
  );
}
