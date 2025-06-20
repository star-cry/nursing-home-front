const MainLayout = (props: MainLayoutProps) => <main {...props} className="w-[480px] m-auto" />;

interface MainLayoutProps {
  children: React.ReactNode;
}

export default MainLayout;
