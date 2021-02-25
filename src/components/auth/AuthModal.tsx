import {
  FormControl,
  Stack,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  Button,
  FormErrorMessage,
  FormLabel,
  Input,
  StackProps,
  Spinner,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

interface IAuthContentProps extends StackProps {
  [key: string]: any;
}

type FormData = {
  email: string;
  pwd: string;
};

const AuthContent: React.FC<IAuthContentProps> = ({
  register,
  errors,
  type,
  isSubmitting,
  ...rest
}) => {
  return (
    <Stack {...rest}>
      <NextLink href="/" aria-label="icons, Back to homepage">
        Icons
      </NextLink>

      <FormControl isInvalid={errors.email && errors.email.message}>
        <FormLabel>Email Address</FormLabel>
        <Input
          autoFocus
          aria-label="Email Address"
          name="email"
          autoComplete="email"
          ref={register({
            required: 'Please enter your email.',
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.pwd && errors.pwd.message}>
        <FormLabel>Password</FormLabel>
        <Input
          aria-label="Password"
          name="pwd"
          type="password"
          autoComplete="current-password"
          ref={register({
            required: 'Please enter a password.',
          })}
        />
        <FormErrorMessage>{errors.pwd && errors.pwd.message}</FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        isDisabled={isSubmitting}
        mt={4}
        variant="solid"
        colorScheme="whatsapp"
      >
        {isSubmitting ? <Spinner /> : type}
      </Button>
    </Stack>
  );
};

const AuthModal: React.FC<any> = ({
  isOpen,
  onClose,
  type,
  onSubmit,
  isSubmitting,
}) => {
  const { handleSubmit, register, errors } = useForm<FormData>();

  return (
    <Box w="100%" maxWidth="400px" shadow={[null, 'md']}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay as={Flex} />
        <ModalContent borderRadius={4}>
          <ModalCloseButton />
          <ModalBody>
            <AuthContent
              as="form"
              px={8}
              py={12}
              spacing={3}
              errors={errors}
              onSubmit={handleSubmit(onSubmit)}
              isSubmitting={isSubmitting}
              register={register}
              type={type}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AuthModal;
