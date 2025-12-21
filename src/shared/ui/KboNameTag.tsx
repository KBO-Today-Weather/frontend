interface KboNameTagProps {
  color: string;
  name: string;
}

const KboNameTag = ({ color, name }: KboNameTagProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="font-semibold">{name}</span>
    </div>
  );
};
export default KboNameTag;
