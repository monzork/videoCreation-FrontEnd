import { Card, Image, Text, Badge, Group } from '@mantine/core';
interface Video{
    id: number;
    title: string;
    url: string;
    createdBy: string;
    createdAt: string;
    userId: number;
    viewCount: number;
};
const video_click = function(video:Video){
    alert(`ver video "${video.title}"`);
}

export default function VideoCard({video}:{video:Video}) {
    
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder onClick={()=>video_click(video)}>
      <Card.Section>
        <Image
          src={video.url}
          height={160}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{video.title}</Text>
        <Badge color="pink" variant="light">
          {video.viewCount}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {video.createdBy}
      </Text>
    </Card>
  );
}
