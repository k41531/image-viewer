/** @jsxImportSource theme-ui */
import { ReactNode } from 'react';
import CounterController from './CounterController';
import OpenFolderButton from './CustomButton/OpenFolderButton';

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
          height: '95%',
        }}
      >
        <main
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
            maxHeight: '100%',
          }}
        >
          {children}
        </main>
        <aside
          sx={{
            px: 4,
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
