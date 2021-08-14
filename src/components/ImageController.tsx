/** @jsx jsx */
import React, { useContext } from 'react';
import { IconButton, jsx } from 'theme-ui';
import { albumContext } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const ctx = useContext(albumContext);
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        mx: `auto`,
      }}
    >
      <IconButton type="button" onClick={ctx.prev}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
          <polygon
            points="23 0,1 12,23 24"
            fill="none"
            stroke="currentcolor"
            strokeWidth={2}
          />
        </svg>
      </IconButton>
      <IconButton type="button" onClick={ctx.next}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
          <polygon
            points="1 0,23 12,1 24"
            fill="none"
            stroke="currentcolor"
            strokeWidth={2}
          />
        </svg>
      </IconButton>
    </div>
  );
}
