import { Card, Image, Text, Badge, Group } from '@mantine/core';

export interface VideoCardProps {
  title: string;
  url: string;
  name: string;
  view: number;
  like: number;
}

export default function VideoCard({ title, url, name, view, like }: VideoCardProps) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={url} height={160} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Text>Views</Text>
        <Badge color="pink" variant="light">
          {view}
        </Badge>
        <Text>Likes</Text>
        <Badge color="pink" variant="light">
          {like}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {name}
      </Text>
    </Card>
  );
}
