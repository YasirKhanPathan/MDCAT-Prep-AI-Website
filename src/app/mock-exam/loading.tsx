export default function MockExamLoading() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-96" />
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-xl" />
            <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-xl" />
          </div>
          <div className="space-y-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 dark:bg-gray-800 rounded" />
            ))}
          </div>
          <div className="h-14 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
