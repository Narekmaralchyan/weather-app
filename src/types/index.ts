
export enum TemperatureUnits {
    STANDARD = 'standard',
    METRIC = 'metric'
}

export type WeatherItem  = {
    main:{
        temp:number,
        temp_max:number,
        temp_min:number,
    },
    dt:number,
    id:number,
    name:string,
    weather:{id:number,main:string,description:string,icon:string}[]
}
