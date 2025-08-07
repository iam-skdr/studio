
'use client';

import { useState } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

type NavbarProps = {
  toggleTheme: () => void;
  currentTheme: string;
};

export function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-16 items-center justify-between rounded-xl glassmorphism px-6">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors">
            <Code2 className="h-8 w-8 text-primary animate-glow" />
            <span className="font-headline">SKDR</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label="Toggle theme">
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button asChild className="light:bg-primary light:text-primary-foreground light:hover:bg-primary/90">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label="Toggle theme">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-xl glassmorphism">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full light:bg-primary light:text-primary-foreground light:hover:bg-primary/90 mt-2">
              <a href="#contact" onClick={() => setIsOpen(false)}>Hire Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
