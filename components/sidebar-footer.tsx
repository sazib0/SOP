import { Button } from '@/components/ui/button';
import { HelpCircle, LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function SidebarFooter() {
  // TODO: Replace with actual user data and logout logic
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out...');
  };

  return (
    <div className="border-t p-3 space-y-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-full justify-start">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-1 rounded-full">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">{user.name}</span>
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Separator />

      <Button variant="ghost" className="w-full justify-start" asChild>
        <a
          href="https://github.com/yourusername/sop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3"
        >
          <HelpCircle className="h-5 w-5" />
          <span>Documentation</span>
        </a>
      </Button>
    </div>
  );
}