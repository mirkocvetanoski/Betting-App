function Layout({ children }) {
  return (
    <section className="flex h-dvh w-full flex-col justify-start bg-slate-800">
      {children}
    </section>
  );
}

export default Layout;
