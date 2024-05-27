export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string;
  technologies: string[];
  link: string;
  androidLink?: string;
  iosLink?: string;
}

export const projects: Project[] = [
  {
    slug: "proyecto-1",
    title: "Storiesi",
    description:
      "Participe en el desarrollo de una api rest para una una aplicación móvil de red social para escritores",
    imageUrl: "./../../public/assets/storiesi.jpg",
    details: "Detalles completos del Proyecto 1...",
    technologies: ["Postgresql", "Nestjs"],
    link: "",
  },
  {
    slug: "proyecto-2",
    title: "Scouting",
    description:
      "Participé en el desarollo de una aplicación móvil para la reserva de lugares para que artistas lleven a cabo diferentes tipos de eventos",
    imageUrl: "./../../public/assets/scouting.jpg",
    details: "Detalles completos del Proyecto 2...",
    technologies: ["React Native", "Firebase"],
    link: "",
    androidLink: "https://play.google.com/store/apps/details?id=com.distsoftware.scoutingapp&pcampaignid=web_share",
    iosLink: "https://apps.apple.com/co/app/scouting/id1589683957"
  },
  {
    slug: "proyecto-3",
    title: "Quicook",
    description: "Proyecto desarrollado de la mano de No Country y un gran grupo de trabajo, en el que desarrollé una api con Expressjs, MongoDB, usando passport y manejo de roles",
    imageUrl: "./../../public/assets/quicook.jpeg",
    details: "Detalles completos del Proyecto 3...",
    technologies: ["Express", "MongoDB"],
    link: "https://nocountry-frontend.onrender.com/",
  },
];
