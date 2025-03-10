const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full flex justify-center">
            {children}
        </div>
    );
};

export default MainLayout;