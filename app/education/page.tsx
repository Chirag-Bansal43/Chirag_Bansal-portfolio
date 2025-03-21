'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, School } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const educationRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      school: "National Institute of Technology",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      year: "2023 - 2027",
      description: "Enrolled in a 4-year undergraduate program with a focus on electronics and communication engineering.",
      icon: GraduationCap
    },
    {
      school: "Kendriya Vidyalaya, Maligaon",
      degree: "High School (XII)",
      year: "2020 - 2022",
      description: "Achieved 95% in CBSE Board Examinations. Participated in various science exhibitions and hackathons.",
      icon: GraduationCap
    },
    {
      school: "Kendriya Vidyalaya, Maligaon",
      degree: "Secondary School (X)",
      year: "2020 - 2020",
      description: "Secured 96% in CBSE Board Examinations. Active participant in coding competitions and science olympiads.",
      icon:GraduationCap
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!educationRef.current) return;

      gsap.from(educationRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        }
      });

      const cards = educationRef.current?.querySelectorAll('.timeline-card') || [];
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top center+=150',
            toggleActions: 'play none none reverse',
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-24  bg-background gradient-bg px-4" ref={educationRef}>
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Education & Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className={`timeline-card flex flex-col md:flex-row items-center gap-6 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon for Mobile */}
                <div className="md:hidden mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Left Content - Card */}
                <div className="w-full md:w-1/2">
                  <Card className="relative border border-primary/20 p-4">
                    {/* Timeline Icon for Desktop */}
                    <div
                      className="hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary"
                      style={{
                        [index % 2 === 0 ? 'right' : 'left']: '-2rem',
                      }}
                    >
                      <Icon className="absolute inset-0 m-auto w-6 h-6 text-white" />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{edu.school}</CardTitle>
                      <CardDescription className="text-lg font-medium">{edu.degree}</CardDescription>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <p className="text-muted-foreground mt-2">{edu.description}</p>
                    </CardHeader>
                  </Card>
                </div>

                {/* Right Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
