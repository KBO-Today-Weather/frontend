import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setMyTeam, selectMyTeam } from "@/store/myTeamStore";
import type { Team } from "@/store/myTeamStore";

export const useTeamSelectModal = () => {
  const dispatch = useAppDispatch();
  const selectedTeam = useAppSelector(selectMyTeam);

  const handleSelect = (team: Team) => {
    dispatch(setMyTeam(team));
  };

  return { selectedTeam, handleSelect };
};
