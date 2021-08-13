import { createContext, useState } from 'react';

export type Photo = {
  name: string;
  path: string;
};
export type Album = {
  name: string;
  path: string;
  files: Photo[];
};
const emptyPhotos: Photo[] = [];
const defaultAlbum = { name: '', path: '', files: emptyPhotos };

// set context type
type AlbumContext = {
  album: Album;
  index: number;
  setImage: (album: Album) => void;
  next: () => void;
  prev: () => void;
};
// context default value
const defaultContext: AlbumContext = {
  album: defaultAlbum,
  index: 0,
  setImage: () => {},
  next: () => {},
  prev: () => {},
};

// context object
export const albumContext = createContext<AlbumContext>(defaultContext);

// custom Hook
export const useAlbum = (): AlbumContext => {
  const [album, setAlbum] = useState(defaultAlbum);
  const [index, setIndex] = useState(0);
  const setImage = (p: Album) => setAlbum(p);
  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % album.files.length);
  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex ? prevIndex - 1 : album.files.length - 1
    );

  return {
    index,
    album,
    setImage,
    next,
    prev,
  };
};
