import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-blue-600",
  changeColor = "text-green-600",
  className = "",
}) => {
  const isPositive = change && change.startsWith("+");

  return (
    <div
      className={`
        bg-white
        p-4 rounded-2xl 
        border border-gray-100
        shadow-sm hover:shadow-md transition-shadow
        ${className}
      `}
    >
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div className={`p-3 rounded-2xl bg-gray-100 ${iconColor}`}>
          {Icon && <Icon className="w-5 h-5" />}
        </div>

        {/* Change Percentage */}
        {change && (
          <div
            className={`flex items-center gap-1 text-sm font-medium ${
              isPositive
                ? `bg-green-50 px-2 py-0.5 rounded-full text-green-600`
                : "text-red-600 bg-red-50 px-2 py-0.5 rounded-full"
            }`}
          >
            {change}
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          </div>
        )}
      </div>

      {/* Value & Title */}
      <div className="mt-6">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <p className="text-gray-500 mt-1 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default StatsCard;
