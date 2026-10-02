import { ImageIcon, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  filename: string;
  description: string;
  aspectRatio?: string;
  type?: "image" | "video";
  resolution?: string;
  className?: string;
}

export function MediaPlaceholder({
  filename,
  description,
  aspectRatio = "16/9",
  type = "image",
  resolution,
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3",
        "bg-muted/40 border border-dashed border-border rounded-lg",
        "text-center p-6",
        className
      )}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Placeholder: ${description}`}
    >
      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        {type === "video" ? (
          <Video className="w-5 h-5" />
        ) : (
          <ImageIcon className="w-5 h-5" />
        )}
      </div>
      <div className="space-y-1 max-w-xs">
        <p className="font-mono text-xs text-muted-foreground/70 break-all">
          {filename}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
        {(aspectRatio || resolution) && (
          <p className="font-mono text-xs text-muted-foreground/50">
            {aspectRatio && `${aspectRatio} ratio`}
            {resolution && ` · ${resolution}`}
          </p>
        )}
      </div>
    </div>
  );
}
