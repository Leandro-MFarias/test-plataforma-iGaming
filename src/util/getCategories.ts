import games from "../data/games.json";

export const categories = games.reduce<{ category: string; icon: string }[]>(
  (acc, game) => {
    const exists = acc.find((item) => item.category === game.category);
    if (!exists) {
      acc.push({ category: game.category, icon: game.icon });
    }

    return acc;
  },
  []
);
