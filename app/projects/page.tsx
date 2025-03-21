'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with Next.js and Supabase",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with real-time updates",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project 3",
      description: "An AI-powered chatbot system",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      tags: ["AI", "Python", "Flask"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project 4",
      description: "A personal finance tracker for budgeting",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      tags: ["React", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24  bg-background gradient-bg">
      <div className="container px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
