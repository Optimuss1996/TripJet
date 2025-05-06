import { Skeleton } from "@/components/ui/skeleton";

interface PropSkeleton {
  numberOfSkeleton: number;
}

export function HorizontalSkeleton({ numberOfSkeleton }: PropSkeleton) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  rounded-lg">
      {[...Array(numberOfSkeleton)].map((_, i) => (
        <div
          key={i}
          className=" flex items-center gap-4  h-36 p-2 bg-white shadow-drop  rounded-lg space-y-4 animate-pulse"
        >
          <div className="w-4/12 h-full p-2">
            <Skeleton className="h-full w-full rounded-lg" />
          </div>

          <div className="flex flex-col justify-between items-center gap-4">
            <div className="w-full">
              <Skeleton className="h-5 w-full rounded-md" />
            </div>

            <div className="flex justify-center items-center gap-5">
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
