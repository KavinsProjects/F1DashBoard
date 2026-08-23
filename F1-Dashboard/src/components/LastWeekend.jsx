import React from "react";

const LastWeekend = () => {
  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">📰</span> WHAT HAPPENED In Hungarian GP
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
    Lando Norris has taken his second consecutive victory of the season during
    an eventful Dutch Grand Prix, the Briton beating Kimi Antonelli to the win
    while home favourite Max Verstappen suffered a dramatic crash that
    resulted in the race being red-flagged.
  </p>

  <p style={{ marginBottom: "12px" }}>
    After Norris initially led away from pole position at the start, the race
    was halted just one lap later when Verstappen lost the rear of his Red Bull
    and hit the wall heavily. The Dutchman fortunately reported that he was
    okay.
  </p>

  <p style={{ marginBottom: "12px" }}>
    When the action resumed, Antonelli made a flying start to overtake Norris
    for P1 and from there stretched out a lead – but as the race entered its
    final third, Norris made ground and retook the position from the Mercedes.
  </p>

  <p style={{ marginBottom: "12px" }}>
    A late Virtual Safety Car – called due to Esteban Ocon’s Haas stopping out
    on track – resulted in a number of drivers pitting including Antonelli,
    setting up for a potential chase to the end as both Norris and George
    Russell in front of him had not stopped for fresh tyres.
  </p>

  <p style={{ marginBottom: "12px" }}>
    While the Silver Arrows inverted their cars to release Antonelli into
    second, Norris would prove unbeatable at the front and crossed the line
    with an 11.536s margin over the championship leader. Russell, meanwhile,
    just sealed the final spot on the podium in third, having fended off the
    chasing Ferraris to the very end.
  </p>

  <p style={{ marginBottom: "0px" }}>
    Lewis Hamilton and Charles Leclerc had to settle for fourth and fifth
    respectively, with McLaren’s Oscar Piastri claiming sixth. Liam Lawson
    placed seventh as the sole Red Bull to finish, the New Zealander keeping
    the position despite a 10-second time penalty for a yellow flag
    infringement.
  </p>
</div>
    </div>
  );
};

export default LastWeekend;
