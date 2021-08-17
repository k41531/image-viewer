/** @jsxImportSource theme-ui */
import React, { useContext } from 'react';
// import { Heading, Text, Box } from '@theme-ui/components';
import { albumContext } from '../contexts/AlbumContext';
import EmptyImage from './EmptyImage';

export default function ImageFrame() {
  const album = useContext(albumContext);
  // const imageName = album.getImageName();
  // const imagePath = album.getImagePath();
  //
  const image =
    album.album.files.length > 0 ? (
      <img
        sx={{
          objectFit: 'contain',
          maxWidth: '100%',
          maxHeight: '100%',
          mx: 'auto',
        }}
        src={album.getImagePath()}
        alt=""
      />
    ) : (
      <EmptyImage />
    );
  return (
    <div
      sx={{
        display: 'flex',
        height: '80%',
      }}
    >
      {image}
    </div>
  );
}
