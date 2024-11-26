const SkeletonCard = () => {
  return (
    <div className="border-4 border-transparent hover:border-sky-400 m-10 max-w-64 bg-red-100 rounded-lg flex flex-col justify-between animate-pulse">
      {/* Card Header Skeleton */}
      <div className="card-header flex items-center p-5">
        <div className="company-logo w-24 h-24 bg-gray-300 rounded-lg"></div>
        <div className="company-details ml-5 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>

      {/* Card Body Skeleton */}
      <div className="card-body p-5 space-y-3">
        <div className="job-location">
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="job-details mt-3 space-y-2">
          <div className="h-3 bg-gray-300 rounded w-36"></div>
          <div className="h-3 bg-gray-300 rounded w-28"></div>
        </div>
      </div>

      {/* Card Footer Skeleton */}
      <div className="card-footer p-5 flex justify-start space-x-3">
        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
