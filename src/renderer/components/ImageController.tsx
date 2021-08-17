/** @jsxImportSource theme-ui */
import React, { useContext, useState, useRef, useEffect } from 'react';
import { IconButton, jsx } from 'theme-ui';
import { albumContext } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const ctx = useContext(albumContext);
  const list = [];
  const data = ctx.album.files;
  const { order } = ctx;
  const image = (key: string, alt: string, src: string) => (
    <img
      sx={{
        width: '100%',
        maxHeight: '100px',
        objectFit: 'cover',
        minHeight: '100%',
      }}
      key={key}
      alt={alt}
      src={src}
    />
  );
  for (let index = 0; index < data.length; index += 1) {
    if (index >= 8) break;
    const file = data[index];
    list.push(image(file.path, file.name, file.path));
  }
  const [thumbnails, setThumnnails] =
    React.useState<Array<jsx.JSX.Element>>(list);
  useEffect(() => {
    const tlist: Array<jsx.JSX.Element> = [];
    for (let index = 0; index < data.length; index += 1) {
      if (index >= 8) break;
      const i = (index + ctx.index) % data.length;
      const file = data[order[i]];
      tlist.push(image(file.path, file.name, file.path));
    }
    setThumnnails(tlist);
  }, [ctx]);

  return (
    <div
      sx={{
        mx: 'auto',
        width: '80%',
      }}
    >
      <div
        sx={{
          mt: '4',
          mb: '2',
          display: 'grid',
          gridTemplateColumns: 'repeat(8,1fr)',
          px: 'auto',
        }}
      >
        {thumbnails}
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
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
    </div>
  );
}
