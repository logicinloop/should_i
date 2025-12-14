export function decide(fd, hg, gl) {
  const hr = new Date().getHours();
  const nt = hr >= 20 || hr <= 5;

  // Healthy food
  if (fd === "healthy") {
    return {
      res: "EAT NOW ✅",
      msg: "Healthy food supports your body.",
      tip: "Great choice! Pair it with enough water."
    };
  }

  // Junk but not hungry
  if (fd === "junk" && hg < 4) {
    return {
      res: "AVOID ❌",
      msg: "You're not really hungry.",
      tip: "Try drinking water or going for a short walk."
    };
  }

  // Late night junk + weight loss
  if (fd === "junk" && nt && gl === "loss") {
    return {
      res: "AVOID ❌",
      msg: "Late night junk affects weight loss.",
      tip: "Try fruits, nuts, or warm milk instead."
    };
  }

  // Default case
  return {
    res: "SMALL PORTION ⚠️",
    msg: "Moderation is the key.",
    tip: "If possible, balance it with protein or fiber."
  };
}
