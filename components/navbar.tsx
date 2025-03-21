'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="font-bold text-2xl px-4 py-2 hover:text-primary transition-colors">
            Portfolio
          </Link>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/education" className="px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                Education
              </Link>
              <Link href="/projects" className="px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}