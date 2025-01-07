import { Card } from '@/components/ui/card';
import { LineChart, Timer, TrendingUp, Users } from 'lucide-react';

export function OperationsDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <TrendingUp clasName="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Efficiency Rate</p>
              <h3 className="text-2xl font-bold">94.2%</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Average Time</p>
              <h3 className="text-2xl font-bold">1.8h</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
              <h3 className="text-2xl font-bold">+12.3%</h3>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Operations Overview</h3>
        <p className="text-sm text-muted-foreground">
          Monitor key operational metrics and performance indicators in real-time.
        </p>
      </Card>
    </div>
  );
}