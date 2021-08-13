import React, { useContext } from 'react';
import { albumContext } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const album = useContext(albumContext);
  return (
    <div>
      {album.album.files.length > 0 && (
        <img height="500px" src={album.album.files[album.index].path} alt="" />
      )}
      <p>{album.album.name}</p>
      <p>{album.album.path}</p>
    </div>
  );
}
