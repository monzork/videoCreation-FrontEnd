import { TextInput, Group, Button, Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import FullShell, { FullShellProps } from '@/components/Shells/BaseFullShell/FullShell';

interface loginProps {
  email: string;
  password: string;
}

interface token {
  token: string;
}

export default function Authentication() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.token) {
      router.push('/dashboard');
    }
  });
  const mutation = useMutation(
    (loginInfo: loginProps) =>
      axios.post<token>(`${process.env.NEXT_PUBLIC_API_BASE_URL!}/auth`, loginInfo),
    {
      onSuccess: (response) => {
        localStorage.token = response.data.token;
      },
    }
  );

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
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
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput withAsterisk label="password" {...form.getInputProps('password')} />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <Button onClick={() => router.push('/signup')}>Sign Up</Button>
    </Box>
  );
}

Authentication.getLayout = function getLayout(page: React.ReactElement<FullShellProps>) {
  return <FullShell>{page}</FullShell>;
};
