export interface Project {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    details: string;
    technologies: string[],
    link: string,
  }
  
  export const projects: Project[] = [
    {
      slug: 'proyecto-1',
      title: 'Proyecto 1',
      description: 'Descripción breve del Proyecto 1',
      imageUrl: './../../public/assets/astro.svg',
      details: 'Detalles completos del Proyecto 1...',
      technologies: ['TypeScript', 'Astro'],
      link: 'https://project-one-link.com',
    },
    {
      slug: 'proyecto-2',
      title: 'Proyecto 2',
      description: 'Descripción breve del Proyecto 2',
      imageUrl: './../../public/assets/astro.svg',
      details: 'Detalles completos del Proyecto 2...',
      technologies: ['TypeScript', 'Astro'],
      link: 'https://project-one-link.com',
    },
    {
      slug: 'proyecto-3',
      title: 'Proyecto 3',
      description: 'Descripción breve del Proyecto 3',
      imageUrl: './../../public/assets/astro.svg',
      details: 'Detalles completos del Proyecto 3...',
      technologies: ['TypeScript', 'Astro'],
      link: 'https://project-one-link.com',
    },
  ];
  