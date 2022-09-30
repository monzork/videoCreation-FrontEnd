import { TextInput, Group, Button, Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface signInProps {
  name: string;
  photo: string;
  email: string;
  password: string;
  type: string;
}

interface token {
  token: string;
}

export default function SignUp() {
  const router = useRouter();
  const goToDashboard = () => {
    if (localStorage.token && localStorage.token !== 'undefined') {
      router.push('/dashboard');
    }
  };
  useEffect(() => goToDashboard);
  const mutation = useMutation(
    (signUpInfo: signInProps) =>
      axios.post<token>(`${process.env.NEXT_PUBLIC_API_BASE_URL!}/users`, signUpInfo),
    {
      onSuccess: (response) => {
        localStorage.token = response.data.token;
        goToDashboard();
      },
    }
  );

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      photo: '',
      type: 'Student',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          mutation.mutate(values);
        })}
      >
        <TextInput withAsterisk label="Name" {...form.getInputProps('name')} />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <PasswordInput withAsterisk label="password" {...form.getInputProps('password')} />
        <TextInput withAsterisk label="Photo" {...form.getInputProps('photo')} />
        <Group position="right" mt="md">
          <Button type="submit">Sign Up</Button>
        </Group>
      </form>
    </Box>
  );
}
