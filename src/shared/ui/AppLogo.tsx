import { IconMapPin } from "@tabler/icons-react";
import { H4 } from "@/lib/Typography";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-9 h-9 bg-kbo-darkBlue rounded-lg">
        <IconMapPin size={20} stroke={2} className="text-white" />
      </div>
      <H4 className="font-bold text-black">KBO Weather</H4>
    </div>
  );
};

export default AppLogo;
