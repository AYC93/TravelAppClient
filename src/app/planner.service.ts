import { Injectable } from "@angular/core";

@Injectable()
export class PlannerService{
    japCities: String[]=[
        'Tokyo','Osaka','Nagoya','Yokohama','Fukuoka','Sapporo','Kobe',
        'Kyoto','Saitama','Hiroshima','Sendai','Chiba','Niigata','Kumamoto',
        'Okayama','Shizuoka','Kagoshima','Utsunomiya','Matsuyama','Oita','Kanazawa',
        'Aomori','Takamatsu','Toyama','Nagasaki','Gifu','Miyazaki','Nagano','Wakayama',
        'Nara','Otsu','Maebashi','Kochi','Naha','Akita','Morioka','Fukushima','Tsu',
        'Mito','Fukui','Tokushima','Yamagata','Saga','Matsue','Yamaguchi','Kofu',
        'Yawatahama-shi','Hirado'
      ]

      destinationType: String[]=[
        'Landmark', 'Accomodation', 'Transportation'
      ]
}