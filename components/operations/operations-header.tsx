import { BarChart3 } from 'lucide-react';

export function OperationsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <BarChart3 className="h-6 w-6" />
          Operations
        </h2>
        <p className="text-sm text-muted-foreground">
          Monitor and optimize operational performance
        </p>
      </div>
    </div>
  );
}