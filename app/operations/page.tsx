import { OperationsHeader } from '@/components/operations/operations-header';
import { OperationsDashboard } from '@/components/operations/operations-dashboard';

export default function OperationsPage() {
  return (
    <div className="space-y-6">
      <OperationsHeader />
      <OperationsDashboard />
    </div>
  );
}