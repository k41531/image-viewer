import { Box } from 'theme-ui';
import { useState } from 'react';
import ImageFrame from './ImageFrame';
import ImageController from './ImageController';

export default function MainPanel() {
  const [show, setShow] = useState(false);
  return (
    <Box
      style={{
        display: 'grid',
        height: '100%',
        gridTemplateRows: show ? '85%' : '100%',
        position: 'relative',
      }}
    >
      <ImageFrame />
      <div onMouseLeave={() => setShow(false)}>
        {show && <ImageController />}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          height: '64px',
          width: '100%',
          display: show ? 'none' : 'initial',
        }}
        onMouseEnter={() => setShow(true)}
      />
    </Box>
  );
}
