import { WeatherTempData } from "./weather.model"

export interface FormField{
    date: Date
    description: string
    city: string
    destination: string
    file: File
    googleUser: GoogleUser
}

export interface GoogleUser{
    email: string
}

// to receive data back from server
export interface ServerEmail{
    email: string
    emailId: number
}

export interface ServerField{
    pid: number
    dateTime: Date
    description: string
    city: string
    destinationType: string
    url: string
    emailId: number
}

// same name as springboot model
export interface CombinedModel{
    planner: ServerField
    weatherTempInfo: WeatherTempData
    
}