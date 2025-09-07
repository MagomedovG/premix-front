import { SlideData } from "@/types";
import React from "react";

export const PriceData: SlideData[] = [
    {
      id: 1,
      // video:'/movie/кивиклубника.mp4',
      data: {
        double:true,
        images:[
            '/live/allpositions.jpg',
            '/catalog/catalog1page.png'
        ]
      },
      dot: {
        icon: "/icons/logo.png",
        title: "Лимонады"
      },
      description:''
    },
    {
      id: 2,
      data: {
        double:true,
        images:[
            '/live/allpositions.jpg',
            '/catalog/catalog2page.png'
        ]
      },
      dot: {
        icon: "/icons/logo.png",
        title: "Чаи"
      },
      description:''
    },
    {
        id: 3,
        data: {
            // double:true,
            images:[
                '/catalog/catalogcoldbrewconcentrate.png',
                '/catalog/catalogcoldbrew.png'
            ]
          },
        dot: {
          icon: "/icons/logo.png",
          title: "Колд Брю"
        },
        description:''
      },
      {
        id: 4,
        data: {
            double:true,
            images:[
                '/live/premixice.jpg',
                '/catalog/catalogpremixspage.png'
            ]
          },
        dot: {
          icon: "/icons/logo.png",
          title: "Премиксы"
        },
        description:''
      },
      {
        id: 5,
        data: {
            double:true,
            images:[
                '/live/shotgranate.jpg',
                '/catalog/catalogshotspage.png'
            ]
          },
        dot: {
          icon: "/icons/logo.png",
          title: "Шоты"
        },
        description:''
      },
  ];