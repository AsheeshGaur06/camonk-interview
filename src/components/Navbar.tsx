export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-4 border-b">
      <div className="font-bold text-xl">CA MONK</div>

      <div className="flex gap-6 text-sm text-gray-600">
        <span>Tools</span>
        <span>Practice</span>
        <span>Events</span>
        <span>Job Board</span>
        <span>Points</span>
      </div>

      <button className="bg-black text-white px-4 py-1.5 rounded-md">
        Profile
      </button>
    </div>
  );
}
