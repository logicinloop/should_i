export function decide(fd, hg, gl) {
  const hr = new Date().getHours();
  const nt = hr >= 20 || hr <= 5;

  if (fd === "healthy") {
    return { res: "EAT NOW ✅", msg: "Healthy food supports your body." };
  }

  if (fd === "junk" && hg < 4) {
    return { res: "AVOID ❌", msg: "You're not really hungry." };
  }

  if (fd === "junk" && nt && gl === "loss") {
    return { res: "AVOID ❌", msg: "Late night junk affects weight loss." };
  }

  return { res: "SMALL PORTION ⚠️", msg: "Moderation is the key." };
}
