import { cn } from "../../lib/utils";
import { LoaderCircle } from "lucide-react";
type Props = {
  size?: number;
  className?: string;
  fullscreen?: boolean;
};

const LoadingSpinner = ({ size = 5, className, fullscreen = false }: Props) => {
  const spinner = (
    <LoaderCircle className={cn("animate-spin", className)} size={size} />
  );
  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
        {spinner}
      </div>
    );
  }
  return spinner;
};

export default LoadingSpinner;
