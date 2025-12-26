import { H3, P } from "@/lib/Typography";

const PageHeader = ({ title, description }: { title: string, description?: string }) => {
  return (
    <div className="gap-2 grid">
      <H3>{title}</H3>
      <P className="text-gray-500">{description}</P>
    </div>
  );
};

export default PageHeader;