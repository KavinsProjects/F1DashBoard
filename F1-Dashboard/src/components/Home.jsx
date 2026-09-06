const Home = ({ onExplore }) => {
  return (
    <div className="home-page">
      <div className="home-overlay" />
      <div className="home-content">
        <p className="home-kicker">PIT WALL / 2026 SEASON</p>
        <h1>It Was Never Just About the Finish Line.</h1>
        <div className="home-copy">
          <p>There&apos;s something about Formula 1 that is difficult to put into words.</p>
          <p className="home-beat">The silence before the lights go out. The sound of twenty engines coming alive. The rush into Turn 1. The risk of an overtake. The heartbreak of a DNF.</p>
          <p>And that moment when everything comes together - <strong>one driver, one car, one perfect lap.</strong></p>
          <p>For me, F1 is more than motorsport.</p>
          <p>It is <strong>speed turned into art, engineering pushed to its limits, and human ambition measured in milliseconds.</strong></p>
          <p>That fascination became the reason I built this dashboard: a world of <strong>machines, people, data, strategy, passion, and moments that stay with you long after the chequered flag.</strong></p>
          <p className="home-signoff">Built with passion.<br />Driven by data.<br />Inspired by Formula 1.</p>
        </div>
        <button className="home-cta" type="button" onClick={onExplore}>
          ENTER THE DASHBOARD <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
      <div className="home-footer">LIGHTS OUT. AND WE GO AGAIN. <span aria-hidden="true">🏁</span></div>
    </div>
  )
}

export default Home