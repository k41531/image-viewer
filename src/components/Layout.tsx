/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from 'theme-ui';
import CounterController from './CounterController';

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
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
          flexGrow: 1,
          flexBasis: 'sidebar',
        }}
      >
        <CounterController />
      </aside>
    </div>
  );
}
