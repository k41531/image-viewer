import React, { useContext } from 'react';
import { Button } from '@theme-ui/components';
import { albumContext } from 'renderer/contexts/AlbumContext';

const shuffle = (array: number[]) => {
  const newArray = array.concat();
  for (let i = newArray.length; i > 1; i -= 1) {
    const k = Math.floor(Math.random() * i);
    [newArray[k], newArray[i - 1]] = [newArray[i - 1], newArray[k]];
  }
  return newArray;
};

export default function ShuffleButton() {
  const ctx = useContext(albumContext);
  const data = ctx.order;
  const clickEvent = () => {
    ctx.setImageOrder(shuffle(data));
  };

  return (
    <Button
      type="button"
      name="Shuffle"
      onClick={clickEvent}
      style={{ width: '230px' }}
    >
      Shuffle
    </Button>
  );
}
