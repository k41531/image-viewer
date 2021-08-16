/** @jsxImportSource theme-ui */
import React, { ReactNode } from 'react';
import CounterController from './CounterController';
import OpenFolderButton from './OpenFolderButton';

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div sx={{ height: '100vh' }}>
      <header
        sx={{
          display: 'flex',
          alignItems: 'center',
          variant: 'styles.header',
          mx: 2,
        }}
      >
        <OpenFolderButton />
        <div sx={{ mx: 'auto' }} />
      </header>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '75%',
        }}
      >
        <main
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
          }}
        >
          {children}
        </main>
        <aside
          sx={{
            padding: '0 32px',
            flexGrow: 1,
            flexBasis: 'sidebar',
            borderLeftStyle: 'solid',
            borderLeftWidth: 1,
            borderColor: 'primary',
          }}
        >
          <CounterController />
        </aside>
      </div>
    </div>
  );
}
