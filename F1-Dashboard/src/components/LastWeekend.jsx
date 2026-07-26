import React from "react";

const LastWeekend = () => {
  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">📰</span> WHAT HAPPENED Hungarian GP
      </h2>
      <div
        style={{
          maxHeight: "420px",
          overflowY: "auto",
          fontSize: "12px",
          lineHeight: "1.6",
          color: "var(--f1-text-secondary)",
          paddingRight: "5px",
        }}
      >
        <p style={{ marginBottom: "12px", fontWeight: "600", color: "white" }}>
          Lando Norris claimed his and McLaren’s first Grand Prix victory of 2026 in Sunday’s Hungarian Grand Prix, taking the chequered flag ahead of Red Bull’s Max Verstappen and Mercedes’ Kimi Antonelli – after mid-race drama and a late retirement for team mate Oscar Piastri.
        </p>
        <p style={{ marginBottom: "12px" }}>
          Polesitter Norris spent the first half of the race in Piastri’s mirrors, having been jumped at Turn 2 on the opening lap – the latter doing just enough to hold onto the lead thereafter, and McLaren resisting Norris’ calls to be ushered through.
        </p>
        <p style={{ marginBottom: "12px" }}>
          However, the intra-team battle was flipped on its head just after the midway point when Piastri – fresh from his second pit stop – encountered traffic in the form of Carlos Sainz in the first sector, and dramatically made contact with the Williams.
        </p>
        <p style={{ marginBottom: "12px" }}>
          That moment, added to Norris’ sublime pace in clear air ahead of his own second stop, swung the race in the reigning World Champion’s favour, before Piastri’s day ended in despair thanks to an apparent gearbox problem.
        </p>
        <p style={{ marginBottom: "12px" }}>
          A Virtual Safety Car (VSC) triggered by Piastri’s stoppage led to more pit lane action, with Verstappen and Antonelli (who had just swapped tyres) staying out to take second and third respectively, ahead of three-stopping Ferrari pair Lewis Hamilton and Charles Leclerc.
        </p>
        <p style={{ marginBottom: "0px" }}>
          Hamilton had initially emerged from that final stop ahead of Antonelli, only to cede the position after replays showed he had reached the relevant VSC white line at the end of the start/finish straight just behind the Mercedes.
        </p>
      </div>
    </div>
  );
};

export default LastWeekend;
