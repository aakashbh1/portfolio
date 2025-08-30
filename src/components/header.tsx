'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Github, Linkedin, Menu, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav
      className={cn(
        'flex items-center gap-1',
        isMobile ? 'flex-col space-y-4 pt-8' : 'hidden md:flex'
      )}
    >
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.id}
          variant="link"
          asChild
          className={cn(
            'text-foreground/80 hover:text-foreground transition-colors hover:no-underline',
            activeSection === item.id &amp;&amp; 'text-foreground font-semibold',
            isMobile &amp;&amp; 'text-lg'
          )}
          onClick={() => isMobile &amp;&amp; setIsMobileMenuOpen(false)}
        >
          <Link href={`#${item.id}`}>{item.label}</Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="text-xl font-bold font-headline">
            Portfolio Pro
          </Link>
          <div className="flex items-center gap-4">
            <NavLinks />
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col items-center justify-center h-full">
                    <NavLinks isMobile />
                    <div className="mt-8 flex items-center gap-4">
                       <Button variant="outline" size="icon" asChild>
                         <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                           <Github className="h-5 w-5" />
                         </a>
                       </Button>
                       <Button variant="outline" size="icon" asChild>
                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                           <Linkedin className="h-5 w-5" />
                         </a>
                       </Button>
                       <Button variant="outline" size="icon" asChild>
                         <a href="mailto:youremail@example.com" aria-label="Email">
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
