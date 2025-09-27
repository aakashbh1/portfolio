'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Github, Linkedin, Menu, Mail, Moon, Sun, Code, User, Home as HomeIcon, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/professional', label: 'Professional', icon: Code },
  { href: '/beyond-work', label: 'Beyond Work', icon: User },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav
      className={cn(
        'flex items-center gap-2',
        isMobile ? 'flex-col space-y-4 pt-8' : 'hidden md:flex'
      )}
    >
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.href}
          variant="link"
          asChild
          className={cn(
            'text-foreground/80 hover:text-foreground transition-colors hover:no-underline',
            pathname === item.href && 'text-foreground font-semibold',
            isMobile && 'text-lg'
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold font-headline">
            Aakash Bhargava
          </Link>
          <div className="flex items-center gap-2">
            <NavLinks />
            <div className="hidden md:flex items-center gap-1">
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col items-center justify-center h-full">
                    <NavLinks isMobile />
                    <div className="mt-8 flex items-center gap-4">
                       <Button variant="outline" size="icon" asChild>
                         <a href="https://github.com/aakashbh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                           <Github className="h-5 w-5" />
                         </a>
                       </Button>
                       <Button variant="outline" size="icon" asChild>
                         <a href="https://www.linkedin.com/in/aakashbh1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                           <Linkedin className="h-5 w-5" />
                         </a>
                       </Button>
                       <Button variant="outline" size="icon" asChild>
                         <a href="mailto:aakashbhargava31@gmail.com" aria-label="Email">
                           <Mail className="h-5 w-5" />
                         </a>
                       </Button>
                     </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
