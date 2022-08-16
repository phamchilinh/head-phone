interface IPageProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IPageProps) => {
  return (
    <div className={`mx-auto w-full md:px-[140px] 2xl:px-[128px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
