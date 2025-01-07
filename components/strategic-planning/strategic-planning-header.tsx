import { BookMarked } from 'lucide-react';

export function StrategicPlanningHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <BookMarked className="h-6 w-6" />
          Strategic Planning
        </h2>
        <p className="text-sm text-muted-foreground">
          Plan and track your strategic initiatives
        </p>
      </div>
    </div>
  );
}