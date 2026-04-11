import { useAppSelector } from "@/store/hook";
import { selectMyTeam } from "@/store/myTeamStore";

export const useMainHeader = () => {
  const selectedTeam = useAppSelector(selectMyTeam);
  return { selectedTeam };
};
