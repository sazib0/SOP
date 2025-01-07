'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarFooter } from '@/components/sidebar-footer';

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden border-r bg-background md:block w-64 fixed left-0 top-0 h-screen">
      <div className="flex flex-col h-full">
        <SidebarHeader />
        <ScrollArea className="flex-1 py-2">
          <div className="space-y-1 px-3">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start',
                    pathname === item.href && 'bg-muted'
                  )}
                  asChild
                >
                  <Link href={item.href} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
        <SidebarFooter />
      </div>
    </nav>
  );
}