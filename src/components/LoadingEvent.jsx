const LoadingEvent = () => (
  <main className="py-24 flex-1 md:ml-64">
    <div className="m-5 flex flex-col lg:flex-row gap-8 mb-12">
      {/* Image Skeleton */}
      <div className="lg:w-1/2">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="animate-pulse bg-gray-200 h-96 w-full"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="lg:w-1/2 space-y-6 mt-10">
        {/* Title Skeleton */}
        <div className="animate-pulse bg-gray-200 h-8 w-3/4 rounded"></div>

        {/* Tags Skeleton */}
        <div className="flex gap-2">
          <div className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
        </div>

        {/* Button Skeleton */}
        <div className="animate-pulse bg-gray-200 h-12 w-48 rounded"></div>

        {/* Date and Location Skeletons */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="animate-pulse bg-gray-200 h-6 w-6 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-6 w-32 rounded"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="animate-pulse bg-gray-200 h-6 w-6 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-6 w-32 rounded"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="animate-pulse bg-gray-200 h-6 w-6 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-6 w-32 rounded"></div>
          </div>
        </div>

        {/* About Section Skeleton */}
        <div>
          <div className="animate-pulse bg-gray-200 h-6 w-48 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Related Events Skeleton */}
    <section className="mt-10">
      <div className="animate-pulse bg-gray-200 h-8 w-48 rounded ml-10 mb-6"></div>
      <div className="p-5 space-y-1 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
        {[1, 2].map((item) => (
          <div key={item} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
        ))}
      </div>
    </section>
  </main>
);

export default LoadingEvent;