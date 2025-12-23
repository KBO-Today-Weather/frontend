const PageHeader = ({ title, description }: { title: string, description?: string }) => {
  return (
    <div className="gap-2 grid">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default PageHeader;