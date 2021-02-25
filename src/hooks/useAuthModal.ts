import { useDisclosure, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useAuth } from '../utils/auth';
import { getErrorMessage } from '../utils/validation';

type ISignUpData = { email: string; pwd: string };
type ISignUpError = { message: any; code: string };

function useAuthModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSubmitting, setSubmitting] = useState(false);
  const auth = useAuth();
  const toast = useToast();

  const signUp = async ({ email, pwd }: ISignUpData) => {
    setSubmitting(true);
    try {
      await auth.signUp(email, pwd);
      toast({
        title: '가입 완료! 환영해요',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.log(error);
      toast({
        title: '에러가 발생했습니다!',
        description: getErrorMessage(error.code),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setSubmitting(false);
  };

  return {
    signUp,
    isOpen,
    onClose,
    onOpen,
    isSubmitting,
  };
}

export default useAuthModal;
