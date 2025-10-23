export default function Loading() {
  return (
    <div className="h-screen w-screen mx-auto p-6 animate-pulse space-y-4">
      <div className="h-8 bg-gray-300 rounded w-2/3"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  );
}
