interface Property {
    id: string;
    name: string;
    location: string;
    image: string;
}
interface floorPlan {
    id: string;
    name: string;
    totalArea: string;
    internal: string;
    outdoor: string;
    view: string;
    unitNumber: string;
    floors: string;
}
interface Amenity {
    id: string;
    name: string;
    icon: React.ReactNode;
    imagePublicId: string;
    title: string;
    description: string;
    location: string
}

interface GalleryImage {
    id: string;
    name: string;
    cloudinaryId: string;
    alt: string;
    type: 'exterior' | 'interior';
}

interface GalleryVideo{
    id: string;
    name: string;
    cloudinaryId: string;
    alt: string;
    type: 'exterior' | 'interior';
}