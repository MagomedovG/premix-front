// types.ts
import { ReactElement } from 'react';
export interface DotData {
    icon: string; // URL или путь к иконке
    title: string;
  }
  
  export interface SlideData {
    id: number;
    video?:string;
    // component: ReactElement; // Компонент для слайда
    data:{
        double?:boolean;
        images:string[]
    };
    dot: DotData; // Данные для точки
    description:string;
  }
  
  // Пример данных
  