import { SettingsHeader } from '@/components/settings/settings-header';
import { SettingsForm } from '@/components/settings/settings-form';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsHeader />
      <SettingsForm />
    </div>
  );
}