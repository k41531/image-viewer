import React, { useContext } from 'react';
import { albumContext, Photo } from '../contexts/AlbumContext';

export default function ImageFrame() {
  const ctx = useContext(albumContext);

  const readDirectory = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.target.files.length === 0) return;
    const first = e.target.files[0].path;
    const name = first.split('/').slice(-2)[0];
    const path = first.slice(0, first.lastIndexOf('/'));
    const files: Photo[] = [];
    const format = new RegExp('([^s]+(\\.(jpg|jpeg|png))$)', 'i');
    e.target.files.forEach((file: Photo) => {
      if (format.test(file.path))
        files.push({ name: file.name, path: file.path });
    });
    ctx.setImage({
      name,
      path,
      files,
    });
  };
  return (
    <div>
      <input
        type="file"
        id="dirs"
        /* @ts-expect-error: https://github.com/facebook/react/issues/3468#issuecomment-448336672 */
        directory=""
        webkitdirectory=""
        onChange={readDirectory}
      />
    </div>
  );
}
