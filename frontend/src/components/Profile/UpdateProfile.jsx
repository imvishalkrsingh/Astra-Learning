import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };

  const { loading } = useSelector(state => state.profile);
  return (
    <Container p="15vw" py="16" minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Update User Details"
          my="16"
          fontWeight={"100"}
          textAlign={['', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type={'text'}
            fontWeight={"100"}
            focusBorderColor="green.500"
          />{' '}
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type={'email'}
            focusBorderColor="green.500"
          />
          <Button
            isLoading={loading}
            w="full"
            colorScheme={'green'}
            type="submit"
          >
            Submit Changes
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
