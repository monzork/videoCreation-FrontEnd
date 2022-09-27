import { Title, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));

export default function Welcome() {
  const { classes } = useStyles();

  return (
    <Title className={classes.title} align="center" mt={100}>
      Welcome to
      <Text inherit variant="gradient" component="span">
        Dimelco app
      </Text>
    </Title>
  );
}
