import { Grid, Loader } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import VideoCard from '../video-card/video-card';

interface VideoGridProps {
  id: number;
  title: string;
  url: string;
  name: string;
  like: number;
  createdAt: string;
  view: number;
}

export default function VideoGrid() {
  const { data: video, isLoading } = useQuery(['video'], () =>
    axios
      .get<VideoGridProps[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL!}/uservideo?pageNumber=1&pageSize=5`
      )
      .then((res) => res.data)
  );

  if (isLoading) return <Loader />;

  return (
    <Grid>
      {video?.map((v) => (
        <Grid.Col span={4} key={v.id}>
          <VideoCard
            like={v.like}
            title={v.title}
            url={v.url}
            name={v.name}
            view={v.view}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
