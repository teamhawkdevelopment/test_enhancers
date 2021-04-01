export interface ShopModel {
    businesses?: (BusinessesEntity)[] | null;
    total: number;
    region: Region;
}

export interface BusinessesEntity {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories?: (CategoriesEntity)[] | null;
    rating: number;
    coordinates: CoordinatesOrCenter;
    transactions?: (null)[] | null;
    location: Location;
    phone: string;
    display_phone: string;
    distance: number;
    price?: string | null;
}

export interface CategoriesEntity {
    alias: string;
    title: string;
}

export interface CoordinatesOrCenter {
    latitude: number;
    longitude: number;
}

export interface Location {
    address1: string;
    address2?: string | null;
    address3?: string | null;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address?: (string)[] | null;
}

export interface Region {
    center: CoordinatesOrCenter;
}
