import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Container,
  Group,
  Button,
} from '@mantine/core';

import FullShell, { FullShellProps } from '@/components/Shells/BaseFullShell/FullShell';

export default function Authentication() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Bienvenido a DISS
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Correo" placeholder="yo@tortuga.com" required />
        <PasswordInput label="Contraseña" placeholder="Tu contraseña" required mt="md" />
        <Group position="apart" mt="md">
          <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
            Olvido su contraseña?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Iniciar sesión
        </Button>
      </Paper>
    </Container>
  );
}

Authentication.getLayout = function getLayout(page: React.ReactElement<FullShellProps>) {
  return <FullShell>{page}</FullShell>;
};
