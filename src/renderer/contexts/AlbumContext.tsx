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
  order: number[];
  setImageOrder: (index: number[]) => void;
  setImage: (album: Album) => void;
  next: () => void;
  prev: () => void;
  getImagePath: () => string;
  getImageName: () => string;
};
// context default value
const defaultContext: AlbumContext = {
  album: defaultAlbum,
  index: 0,
  order: [],
  setImageOrder: () => {},
  setImage: () => {},
  next: () => {},
  prev: () => {},
  getImagePath: () => '',
  getImageName: () => '',
};

// context object
export const albumContext = createContext<AlbumContext>(defaultContext);

// custom Hook
export const useAlbum = (): AlbumContext => {
  const [album, setAlbum] = useState(defaultAlbum);
  const [order, setOrder] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const setImage = (p: Album) => {
    setAlbum(p);
    setOrder([...Array(p.files.length).keys()]);
  };
  const setImageOrder = (numbers: number[]) => setOrder(numbers);
  const next = () => {
    if (album.files.length === 0) return;
    setIndex((prevIndex) => (prevIndex + 1) % album.files.length);
  };
  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex ? prevIndex - 1 : album.files.length - 1
    );

  const getImagePath = () =>
    album.files.length ? album.files[order[index]].path : '';
  const getImageName = () =>
    album.files.length ? album.files[order[index]].name : '';

  return {
    index,
    album,
    order,
    setImageOrder,
    setImage,
    next,
    prev,
    getImagePath,
    getImageName,
  };
};
