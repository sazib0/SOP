import { Card } from '@/components/ui/card';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Calendar,
  Users,
  Target,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Last updated: Just now</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Performance Score</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-yellow-500/10 rounded-full">
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Risks</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-green-500/10 rounded-full">
              <Target className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Goals On Track</p>
              <h3 className="text-2xl font-bold">8/10</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Milestones
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Q2 Strategy Review</p>
                <p className="text-sm text-muted-foreground">Due in 5 days</p>
              </div>
              <span className="text-yellow-500 text-sm font-medium">In Progress</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Supply Chain Optimization</p>
                <p className="text-sm text-muted-foreground">Due in 2 weeks</p>
              </div>
              <span className="text-green-500 text-sm font-medium">On Track</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Team Performance
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Operations Team</span>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-primary rounded-full" style={{ width: '95%' }} />
              </div>
            </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Strategy Team</span>
                <span className="text-sm font-medium">88%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-primary rounded-full" style={{ width: '88%' }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}