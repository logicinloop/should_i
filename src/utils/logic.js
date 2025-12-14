// Fun random tips
const funTips = [
  "Drink water before meals to avoid overeating.",
  "Include colorful vegetables for more nutrients.",
  "Walking after meals helps digestion.",
  "Protein keeps you full longer!",
  "Avoid eating late at night for better sleep.",
  "Chew slowly to improve digestion.",
  "Try to include a fruit in every meal."
];

function randomTip() {
  return funTips[Math.floor(Math.random() * funTips.length)];
}

// Health score for foods
const foodScore = { healthy: 100, sweet: 50, junk: 20 };

export function decide(f, h, g) {
  const hour = new Date().getHours();
  let timeOfDay = "";

  if (hour >= 5 && hour < 11) timeOfDay = "breakfast";
  else if (hour >= 11 && hour < 17) timeOfDay = "lunch";
  else if (hour >= 17 && hour < 20) timeOfDay = "snack";
  else timeOfDay = "dinner";

  const timeTips = {
    breakfast: "Start your day with protein & fiber.",
    lunch: "Include vegetables & whole grains.",
    snack: "Pick fruits or nuts.",
    dinner: "Keep it light & avoid junk."
  };

  let tip = timeTips[timeOfDay];
  let result = "";
  let reason = "";

  if (f === "healthy") {
    result = "EAT NOW ✅";
    reason = "Healthy food supports your body.";
  } else if (f === "junk" && h < 4) {
    result = "AVOID ❌";
    reason = "You're not really hungry.";
    tip = "Drink water or wait a bit.";
  } else if (f === "junk" && hour >= 20 && g === "loss") {
    result = "AVOID ❌";
    reason = "Late night junk affects weight loss.";
    tip = "Try fruits, nuts, or warm milk instead.";
  } else {
    result = "SMALL PORTION ⚠️";
    reason = "Moderation is the key.";
  }

  // Health score
  let score = foodScore[f] || 0;
  if (g === "loss" && f === "junk") score -= 10;
  if (g === "gain" && f === "healthy") score += 5;

  tip = `${tip} This meal = ${score}/100 health score. 💡 ${randomTip()}`;

  return { result, reason, tip, score };
}
