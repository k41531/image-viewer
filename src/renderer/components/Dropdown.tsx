import { useState, ReactNode } from 'react';
import { Box, IconButton, Flex, Grid, Text } from '@theme-ui/components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Props = {
  children: ReactNode;
};
export default function Dropdown({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };
  const icon = isOpen ? <FaChevronUp /> : <FaChevronDown />;
  return (
    <Box>
      <Flex>
        <Text as="h5">Settings</Text>
        <IconButton ml="auto" onClick={handleChange}>
          {icon}
        </IconButton>
      </Flex>
      {isOpen && <Grid>{children}</Grid>}
    </Box>
  );
}
