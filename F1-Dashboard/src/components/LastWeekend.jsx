const LastWeekend = () => {
  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">📰</span> WHAT HAPPENED IN MONZA
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
        <img
          src="https://media.formula1.com/image/upload/t_16by9North/c_fit,w_1584/q_auto/v1740000001/trackside-images/2026/F1_Grand_Prix_of_Italy___Qualifying/2293662302.webp"
          alt="Pierre Gasly celebrates pole position at Monza"
          style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px", marginBottom: "12px" }}
        />
        <p style={{ marginBottom: "12px", fontWeight: "600", color: "white" }}>
          Pierre Gasly claimed a sensational maiden F1 pole at Monza on September 5,
          setting a 1:21.786 in the final Q3 run for Alpine.
        </p>
        <p style={{ marginBottom: "12px" }}>
          George Russell qualified second in the Mercedes, 0.060 seconds behind Gasly,
          while Oscar Piastri initially took third for McLaren. Charles Leclerc and Lewis
          Hamilton completed the Ferrari home-team top five.
        </p>
        <p style={{ marginBottom: "12px" }}>
          Piastri was later given a three-place grid penalty for impeding Liam Lawson in Q2,
          dropping him to sixth on the official starting grid. Gasly therefore led Russell,
          Leclerc, Hamilton and Max Verstappen away for Sunday&apos;s race.
        </p>
        <p style={{ marginBottom: "0" }}>
          Monza&apos;s history stretches back to its first Formula 1 Grand Prix in 1950. The
          5.793 km Temple of Speed is famous for its long straights, low-downforce setup,
          Ferrari&apos;s passionate Tifosi and 53-lap Italian Grand Prix.
        </p>
      </div>
    </div>
  );
};

export default LastWeekend;
