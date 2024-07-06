import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'green' }) => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{ transform: 'scale(3)' }}>
        <Spinner
          thickness="1px"
          speed="0.65s"
          emptyColor="transparent"
          color={color}
          size="xs"
        />
      </div>
    </VStack>
  );
};

export default Loader;
