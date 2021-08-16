import React, { useContext } from 'react';
import { albumContext } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const album = useContext(albumContext);
  const imageName = album.album.name;
  const imagePath = album.album.path;

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%',
      }}
    >
      {album.album.files.length > 0 && (
        <img
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            height: '75vh',
            margin: '0 auto',
          }}
          src={album.album.files[album.index].path}
          alt=""
        />
      )}
    </div>
  );
}
