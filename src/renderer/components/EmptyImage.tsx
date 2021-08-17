/** @jsxImportSource theme-ui */
import React, { useContext } from 'react';
import { Text, Box } from '@theme-ui/components';

export default function EmptyImage() {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        maxHeight: '100%',
        mx: 'auto',
        my: 'auto',
      }}
    >
      <Text as="h1" variant="caps">
        NIL
      </Text>
    </Box>
  );
}
