'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Code, Sparkles, Rocket } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardContent } from '@/components/ui/card';
import Projects from './projects/page';
import Education from './education/page';
import Contact from './contact/page';
export default function Home() {
  const skills = [
    { name: 'Electronics', icon: Code, color: 'bg-blue-500/20 text-blue-500' },
    { name: 'Machine Learning', icon: Sparkles, color: 'bg-purple-500/20 text-purple-500' },
    { name: 'Problem Solving', icon: Rocket, color: 'bg-orange-500/20 text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-background gradient-bg">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="text-primary px-2 rounded-md">
                Chirag Bansal
              </span>
            </motion.h1>
            
            <motion.div
              className="text-2xl sm:text-3xl text-muted-foreground h-[60px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Electronics Engineer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about creating innovative solutions and pushing the boundaries of technology.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://drive.google.com/file/d/10pF8N89L6_7ON1N3kavtWiq2KDMUm9Ep/view?usp=sharing" className="flex items-center">
                  Resume <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button variant="ghost" size="icon" asChild className="h-12 w-12 hover:bg-primary/20">
                <Link href="https://github.com/Chirag-Bansal43?tab=stars" target="_blank">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-12 w-12 hover:bg-primary/20">
                <Link href="https://www.linkedin.com/in/chirag-bansal-b8a38028a/" target="_blank">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-12 w-12 hover:bg-primary/20">
                <Link href="mailto:chirag_ug_23@ece.nits.ac.in">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-primary/20">
              <img
                src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1742587242/Screenshot_2025-03-22_013014_dyfc3c.jpg"
                alt="Chirag Bansal"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                >
                  <Card className="card-gradient border border-primary/20 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`p-4 rounded-full ${skill.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Projects/>
      <Education/>
      <Contact/>
  </div>
  );
}