export default function Tape() {
    const text = "SASH • CONTENT DIRECTION";
    // Repetimos varias veces para que el loop sea continuo
    const items = Array.from({ length: 18 }, () => text).join("     •     ");
  
    return (
      <div className="tape">
        <div className="tape__track" aria-hidden="true">
          <span className="tape__text">{items}</span>
          <span className="tape__text">{items}</span>
        </div>
      </div>
    );
  }