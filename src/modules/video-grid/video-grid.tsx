import { Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import VideoCard from '../video-card/video-card';

interface Video{
    id: number;
    title: string;
    url: string;
    createdBy: string;
    createdAt: string;
    userId: number;
    viewCount: number;
};

const videos:Video[] = [{
    id: 1,
    title: '7 COMANDOS INCREIBLES PARA DOCKER! - V2M',
    url: 'https://i.ytimg.com/vi/UY-_QQpu1uY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNzOzRZ8MljO4MgtSguWQ7mER12A',
    createdBy: 'Pelado Nerd',
    createdAt: '',
    userId: 1,
    viewCount: 1000 
},{
    id: 2,
    title: '7 COMANDOS INCREIBLES PARA DOCKER! - V2M',
    url: 'https://i.ytimg.com/vi/sF584zvHzv4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdyZ7_cXdgfpg9TwnNZ0JTwNoZvw',
    createdBy: 'HolaMundo',
    createdAt: '',
    userId: 2,
    viewCount: 1500 
},{
    id: 3,
    title: 'Ninguém para uma Mulher Determinada! #2',
    url: 'https://i.ytimg.com/vi/7A56rFVpMZY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDB8BK239KLQ-cr20V5nUmOcR46kQ',
    createdBy: 'Faby Franco - Obras, Reformas e Diy',
    createdAt: '',
    userId: 3,
    viewCount: 2000 
},{
    id: 4,
    title: 'PENTESTING e historias de HACKERS | S4vitar',
    url: 'https://i.ytimg.com/vi/ryVjn2XP1xQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXlzhhuz29e3iLxwzQ51OlmxKeog',
    createdBy: 'Draugr',
    createdAt: '',
    userId: 4,
    viewCount: 2500 
}];

function GetTimelineByIdUser(idUser: number): Promise<Video[]>{

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(videos);
        }, 3000);
    });
}
export default function VideoGrid({idUser}:{idUser:number}) {
    const [videos, setVideos] = useState<Video[]>([]);
    useEffect(() => {
        GetTimelineByIdUser(idUser).then((v) => setVideos(v));
      }, []);
  return (
    <Grid>
        {
            videos.map(video => (
                <Grid.Col span={4}>
                    <VideoCard video={video}></VideoCard>
                </Grid.Col>
            ))
        }
    </Grid>
  );
}