import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  classNameWrapper?: string;
}

export function ImageWithSkeleton({
  src,
  alt = "",
  className = "",
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full">
      {!loaded && <Skeleton className="w-full  rounded-lg animate-pulse " />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out rounded-lg ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
