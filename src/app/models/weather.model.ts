export interface WeatherQuery {
    city: string
    units: string
  }
  export interface WeatherTempData{
    weatherInfoList: WeatherData[]
    tempInfo: TempData
  }
  
  export interface WeatherData {
    main: string
    description: string
    icon: string
  }
  
  export interface TempData {
    temp: string
    tempMin: string
    tempMax: string
  }

  export interface WeatherLoc{
    lat: string
    lon: string
  }
  