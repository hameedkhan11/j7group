// data/navbarData.ts

import { DropdownSection } from "../navbar/types";

export const aboutSections: DropdownSection[] = [
  {
    id: 1,
    category: "About Us",
    title: "Our Story",
    image: "samples/landscapes/architecture-signs",
    description: "Range Ras Al Khaimah, part of Range Developments, offers luxury beachfront apartments in Al Marjan. With a decade of expertise, we craft bespoke living experiences in one of the UAE's most coveted destinations."
  },
  {
    id: 2,
    category: "About Us", 
    title: "Partnerships",
    image: "samples/landscapes/girl-urban-view"
  },
  {
    id: 3,
    category: "About Us",
    title: "Our Team", 
    image: "samples/people/jazz"
  }
];

export const developments: DropdownSection[] = [
  {
    id: 1,
    category: "Developments",
    title: "The Beach Vista",
    image: "imgi_48_67ca7509dff64ea1d506ac84_ellington_2_zo0moy"
  },
  {
    id: 2,
    category: "Developments",
    title: "The Beach Residences",
    image: "imgi_13_1729680048-image2-copy_okmsf1"
  },
  {
    id: 3,
    category: "Developments", 
    title: "Island Heights",
    image: "imgi_132_7_0x0_a4a_cogdhb"
  },
  {
    id: 4,
    category: "Developments",
    title: "The Beach House",
    image: "imgi_40_1743686885-web-2_t6jotj"
  }
];

export const mediaCenter: DropdownSection[] = [
  {
    id: 1,
    category: "Media Center",
    title: "News and Press Releases",
    image: "imgi_29_1731504856-landmark_ndh3z3",
    href: "/news" // Added route for news
  },
  {
    id: 2,
    category: "Media Center",
    title: "Blog",
    image: "imgi_27_1730466661-design-3-copy_phol9i",
    href: "/blog" // Added route for blog
  },
  {
    id: 3,
    category: "Media Center",
    title: "Events",
    image: "imgi_81_kam-idris-vqMQN9zImG4-unsplash_1_-min_eidivr",
    href: "/events" // Future events page
  },
  {
    id: 4,
    category: "Media Center",
    title: "Gallery",
    image: "imgi_3_3kgjP9qDZpTTY29GYKnxPhfglWs_rhkhtw",
    href: "/gallery" // Future gallery page
  }
];
