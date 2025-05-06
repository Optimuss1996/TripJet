import { Skeleton } from "@/components/ui/skeleton";

interface PropSkeleton {
  numberOfSkeleton: number;
}

export default function VerticalSkeleton({ numberOfSkeleton }: PropSkeleton) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(numberOfSkeleton)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-60 w-full rounded-lg" />
          <Skeleton className="h-8 w-full" />
          <div className=" flex justify-center items-center gap-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
