"use client";

interface IconTextButtonProps {
  icon: string; // iconify className (e.g., "tabler-home")
  text: string;
}

const IconTextButton = ({ icon, text }: IconTextButtonProps) => {
  return (
    <button className="px-3 py-2 rounded-md hover:bg-kbo-navy hover:text-white transition-colors duration-200">
      <div className="flex items-center justify-center gap-2">
        <i className={icon} />
        <span className="text-sm">{text}</span>
      </div>
    </button>
  );
};
export default IconTextButton;
