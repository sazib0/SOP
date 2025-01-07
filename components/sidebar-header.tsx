import { BarChart3 } from 'lucide-react';
import Link from 'next/link';

export function SidebarHeader() {
  return (
    <div className="flex h-16 items-center border-b px-6">
      <Link href="/" className="flex items-center space-x-3">
        <BarChart3 className="h-6 w-6" />
        <span className="font-bold text-lg">SOP</span>
      </Link>
    </div>
  );
}