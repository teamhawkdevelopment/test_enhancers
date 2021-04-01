export interface WeatherModel {
    coord: Coordinates;
    weather?: (WeatherEntity)[] | null;
    base: string;
    main: Main;
    id: number;
    name: string;
    cod: number;
}

export interface Coordinates {
    lon: number;
    lat: number;
}

export interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}