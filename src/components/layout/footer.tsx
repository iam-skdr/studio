import { Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Separator className="mb-8 bg-border/50" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} V. Sri Krishna Deva Rayudu. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <a
              href="mailto:skdr2311@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>skdr2311@gmail.com</span>
            </a>
            <a
              href="tel:+917349401111"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 73494 01111</span>
            </a>
        </div>
      </div>
    </footer>
  );
}
