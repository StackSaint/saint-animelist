const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 pb-8 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card flex flex-col gap-2 animate-pulse">
          <div className="skeleton skeleton-card-image"></div>
          <div className="skeleton h-4 rounded w-3/4"></div>
          <div className="skeleton h-3 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader
