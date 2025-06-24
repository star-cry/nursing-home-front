const MainLayout = (props: MainLayoutProps) => (
  <main {...props} className="w-[480px] m-auto bg-white h-dvh overflow-hidden" />
);

interface MainLayoutProps {
  children: React.ReactNode;
}

export default MainLayout;
