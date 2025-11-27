import { useMutation } from '@tanstack/react-query';
import { registerUserAction } from '../actions/registerUser.action';

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUserAction,
    onSuccess: () => {
      console.log('Éxito');
    },
    onError: () => {
      console.log('Error');
    },
  });
};
