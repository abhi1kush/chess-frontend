type EngineWarmupBarProps = {
  percent: number;
};

export default function EngineWarmupBar({ percent }: EngineWarmupBarProps) {
  return (
    <div
      className="moves-engine-warming"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-label="Engine loading"
    >
      <div className="moves-engine-warming-header">
        <span className="moves-engine-warming-label">Engine warming up…</span>
        <span className="moves-engine-warming-pct">{percent}%</span>
      </div>
      <div className="moves-engine-warming-track">
        <div className="moves-engine-warming-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
