import { StrategicPlanningHeader } from '@/components/strategic-planning/strategic-planning-header';
import { StrategicPlanningDashboard } from '@/components/strategic-planning/strategic-planning-dashboard';

export default function StrategicPlanningPage() {
  return (
    <div className="space-y-6">
      <StrategicPlanningHeader />
      <StrategicPlanningDashboard />
    </div>
  );
}