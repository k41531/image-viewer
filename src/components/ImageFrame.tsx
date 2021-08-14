/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from 'theme-ui';
import { albumContext } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const album = useContext(albumContext);
  const imageName = album.album.name;
  const imagePath = album.album.path;

  return (
    <div
      sx={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {album.album.files.length > 0 && (
        <img
          sx={{
            objectFit: 'contain',
            maxWidth: '100%',
            height: '80vh',
            mx: 'auto',
          }}
          src={album.album.files[album.index].path}
          alt=""
        />
      )}
    </div>
  );
}
