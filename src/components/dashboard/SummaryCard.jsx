export default function SummaryCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="summary-card">

      <div className="summary-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{value}</p>

    </div>
  );
}