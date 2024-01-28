export interface Property {
    id: number | string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    details?: PropertyDetails;
}

export interface Rating {
    rate: number;
    count: number;
}

export interface PropertyDetails {
    idProperty: number | string;
    location: string;
    status: string;
    beds: number;
    baths: number;
    garage: number;
    propertyType: string;
    area: string;
    descProperty: DescProperty;
}

export interface DescProperty {
    title: string;
    desc: string;
}