import { Cog } from 'lucide-react';

export function SettingsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Cog className="h-6 w-6" />
          Settings
        </h2>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
    </div>
  );
}