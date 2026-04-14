"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import PlayerListItem from "@/components/team/ui/PlayerListItem";
import { Player } from "@/entities/team";
import { cn } from "@/lib/utils";

interface PlayerSearchSectionProps {
  teamId: string;
  teamColor: string;
  players: Player[];
  coaches: Player[];
}

const PlayerSearchSection = ({ teamId, teamColor, players, coaches }: PlayerSearchSectionProps) => {
  const router = useRouter();
  const [tab, setTab] = useState<"player" | "coach">("player");
  const [query, setQuery] = useState("");

  const list = tab === "player" ? players : coaches;
  const filtered = list.filter((p) => p.name.includes(query));

  return (
    <Container>
      <p className="font-semibold text-base mb-3">선수 & 코치 검색</p>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="이름으로 검색..."
          className="flex-1 h-9 px-3 text-sm border border-gray-200 rounded-md outline-none focus:border-gray-400"
        />
        <Button className="bg-kbo-darkBlue hover:bg-kbo-blue text-white">검색</Button>
      </div>
      <div className="flex bg-gray-100 rounded-lg p-1 mb-2">
        {(["player", "coach"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 py-1.5 rounded-md text-sm transition-colors",
              tab === t ? "bg-white font-semibold shadow-sm" : "text-gray-500"
            )}
          >
            {t === "player" ? "선수" : "코치"}
          </button>
        ))}
      </div>
      <div>
        {filtered.map((p) => (
          <PlayerListItem
            key={p.jerseyNumber}
            {...p}
            teamColor={teamColor}
            onClick={() => router.push(`/team/${teamId}/player/${p.id}`)}
          />
        ))}
      </div>
    </Container>
  );
};

export default PlayerSearchSection;
