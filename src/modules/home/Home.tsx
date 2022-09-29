import MainShell, { MainShellProps } from '@/components/Shells/DashboardShell/MainShell';
import VideoGrid from '../video-grid/video-grid';

export default function Home() {
  return (
    <>
      <VideoGrid />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement<MainShellProps>) {
  return <MainShell>{page}</MainShell>;
};
