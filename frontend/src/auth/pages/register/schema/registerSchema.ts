import { z } from 'zod';

export const registerSchema = z
  .object({
    fullName: z
      .string({ error: 'El nombre completo es requerido' })
      .min(3, { error: 'El nombre debe tener al menos 2 caracteres' })
      .max(100),
    email: z.email({ error: 'Ingrese un correo válido' }),
    password: z
      .string({ error: 'El campo password es obligatorio' })
      .min(8, { error: 'La contraseña debe tener al menos 8 caracteres' })
      .regex(/[A-Z]/, { error: 'Debe contener al menos una letra mayúscula' })
      .regex(/[0-9]/, { error: 'Debe contener al menos un número' })
      .regex(/[^a-zA-Z0-9]/, {
        error: 'Debe contener al menos un carácter especial',
      })
      .max(100),
    confirmPassword: z.string({
      error: 'El campo de confirmPassword is required',
    }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    error: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });
