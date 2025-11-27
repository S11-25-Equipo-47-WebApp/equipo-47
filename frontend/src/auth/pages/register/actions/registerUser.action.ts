import { petAPI } from '@/api/petApi';
import type { Register } from '../interfaces/register.interface';

export const registerUserAction = async ({
  confirmPassword,
  email,
  fullName,
  password,
}: Register) => {
  const { data } = await petAPI.post('/users/register', {
    fullName,
    email,
    password,
    confirmPassword,
  });

  return data;
};
