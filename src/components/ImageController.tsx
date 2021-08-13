import React, { useContext } from 'react';
import { albumContext } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const ctx = useContext(albumContext);
  return (
    <div>
      <button type="button" onClick={ctx.prev}>
        Prev
      </button>
      <button type="button" onClick={ctx.next}>
        Next
      </button>
    </div>
  );
}
