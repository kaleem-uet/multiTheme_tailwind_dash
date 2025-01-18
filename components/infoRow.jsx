export default function InfoRow({ label, value }) {
  return (
    <div className="flex flex-row gap-4">
      <span className="text-[#67748e] text-sm font-semibold font-['Open Sans'] min-w-[100px]">
        {label}
      </span>
      <span className="text-[#252f40] text-sm font-semibold font-['Open Sans']">
        {value}
      </span>
    </div>
  );
}
