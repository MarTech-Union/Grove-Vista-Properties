export default function StatCard({ icon, label, value, trend, trendUp }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-500 truncate">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-slate-900">{value}</p>
        {trend !== undefined && (
          <p className={`mt-1 text-xs font-semibold ${trendUp ? "text-emerald-600" : "text-slate-400"}`}>
            {trendUp ? "↑" : "→"} {trend}
          </p>
        )}
      </div>
    </div>
  );
}
