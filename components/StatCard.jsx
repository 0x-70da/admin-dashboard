const StatCard = ({ name, icon: Icon, value }) => {
  return (
    <div className="w-full md:w-[25%] h-25 bg-(--background-secondary) rounded-md p-4 space-y-1 hover:-translate-y-1 transition-transform duration-200">
      <div className="flex items-center space-x-2">
        <Icon size={24} color="var(--primary-green)" />
        <span>{name}</span>
      </div>
      <strong className="text-2xl font-bold">{value}</strong>
    </div>
  );
};

export default StatCard;
