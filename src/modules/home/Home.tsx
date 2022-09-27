import Welcome from '@/components/Welcome/Welcome';
import ColorSchemeToggle from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import MainShell, { MainShellProps } from '@/components/Shells/DashboardShell/MainShell';

export default function Home() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement<MainShellProps>) {
  return <MainShell>{page}</MainShell>;
};
