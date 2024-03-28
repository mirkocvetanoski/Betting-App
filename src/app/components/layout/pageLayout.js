function PageLayout({ children }) {
  return (
    <div className="relative flex w-10/12 items-start justify-center overflow-y-scroll">
      {children}
    </div>
  );
}

export default PageLayout;
