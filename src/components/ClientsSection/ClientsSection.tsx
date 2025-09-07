"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from 'framer-motion'
import Container from "../Container/Container";

const clients = [
  { name: "Bisou bisou", priority: 3 },
  { name: "Wake up", priority: 2 },
  { name: "Гостинная", priority: 1 },
  { name: "Liu", priority: 2 },
  { name: "Jeff", priority: 1 },
  { name: "Fes", priority: 1 },
  { name: "Центр", priority: 2 },
  { name: "B1", priority: 1 },
  { name: "Юта", priority: 1 },
  { name: "Seasons of coffee", priority: 2 },
  { name: "Пора вставать", priority: 2 },
  { name: "Dose coffee", priority: 1 },
  { name: "Le coffee", priority: 1 },
  { name: "Coffee point", priority: 1 },
  { name: "Pekarius", priority: 3 },
  { name: "IMC", priority: 2 },
  { name: "Парамакс", priority: 1 },
  { name: "Kihas", priority: 1 },
  { name: "Anish", priority: 1 },
  { name: "Маяк", priority: 1 },
  { name: "Twenty", priority: 1 },
  { name: "Lit coffee", priority: 1 },
  { name: "Location", priority: 1 },
  { name: "Piko", priority: 1 },
  { name: "Паразит", priority: 1 },
  { name: "Coffeeteri", priority: 1 },
  { name: "Safari", priority: 1 },
  { name: "Орота", priority: 1 },
  { name: "Baker park", priority: 1 },
  { name: "Rush coffee", priority: 1 },
  { name: "Costa rika", priority: 1 },
  { name: "Camelia", priority: 1 },
  { name: "Shirin coffee", priority: 2 },
  { name: "B144", priority: 1 },
  { name: "Unkai", priority: 1 },
  { name: "Вшоколаде", priority: 1 },
  { name: "Пикабу", priority: 1 },
  { name: "Урбеч", priority: 1 },
  { name: "Кик", priority: 1 },
  { name: "Пять звезд", priority: 1 },
  { name: "Рахат", priority: 1 },
  { name: "Cava", priority: 1 },
  { name: "Sv33", priority: 3 },
  { name: "Village", priority: 1 },
  { name: "Sharab coffee", priority: 1 },
  { name: "Yr", priority: 1 },
  { name: "Brioche", priority: 2 },
  { name: "Mono", priority: 1 },
  { name: "Velvet flowers", priority: 1 },
  { name: "Mond", priority: 1 },
  { name: "Ribsher", priority: 1 },
  { name: "Астрамед", priority: 1 },
  { name: "Чечня", priority: 2, type: 'location' },
  { name: "Ингушетия", priority: 2, type: 'location' },
  { name: "Симферополь", priority: 2, type: 'location' },
  { name: "Татарстан", priority: 2, type: 'location' },
  { name: "Москва", priority: 2, type: 'location' },
];

export default function ClientsSection() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    let width = 800;
    let height = 800;
    let mainRadius = 40
    const screenWidth = window.innerWidth;
  
    let radiusRange: [number, number];
    let fontBase: number;
  
    if (screenWidth < 640) {
      // mobile
      mainRadius = 22
      width = 400
      height = 400
      radiusRange = [17, 32];
      fontBase = 4;
    } else if (screenWidth < 800) {
      // tablet
      radiusRange = [30, 50];
      fontBase = 7;
    } else {
      // desktop
      radiusRange = [35, 65];
      fontBase = 9;
    }
  
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g");
  
    const radiusScale = d3.scaleLinear().domain([1, 3]).range(radiusRange);
  
    const centerNode = {
      name: "Premix",
      priority: 3,
      radius: radiusRange[1] + mainRadius, // центр чуть крупнее
      fx: width / 2,
      fy: height / 2,
    };
  
    const nodes = [
      centerNode,
      ...clients.map((d) => ({
        ...d,
        radius: radiusScale(d.priority),
      })),
    ];
  
    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.radius + 0.4))
      .on("tick", ticked);
      
    function pulse(selection) {
      (function repeat() {
        selection
          .transition()
          .duration(1000)
          .attr("r", (d: any) => d.radius * 1.2)
          .transition()
          .duration(1000)
          .attr("r", (d: any) => d.radius)
          .on("end", repeat);
      })();
    }
    const node = svg
      .selectAll("g.node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node bubble");
  
    node
      .append("circle")
      .attr("r", (d: any) => d.radius)
      .attr("fill", (d: any) => {
        if (d.name === "Premix") return "#264653";
        return d.type === "location" ? "#BB0000" : "#BB0000";
      });
      node
      .append("circle")
      .attr("r", (d: any) => d.radius)
      .attr("fill", (d: any) => {
        if (d.name === "Premix") return "#264653";
        return d.type === "location" ? "#BB0000" : "#BB0000"; 
      })
      .attr("stroke", (d: any) => d.type === "location" ? "#BB0000" : "none")
      .attr("stroke-width", (d: any) => d.type === "location" ? 3 : 0);
    

    node.selectAll("circle")
      .filter((d: any) => d.type === "location")
      .call(pulse);
    node
      .append("circle")
      .attr("r", (d: any) => d.radius)
      .attr("fill", (d: any) => (d.name === "Premix" ? "#264653" : "#BB0000"))
      .style("transition", "all 0.3s ease")
      .on("mouseover", function (event, d: any) {
        if (d.name === "Premix") return;
      
        d3.select(this)
          .transition()
          .duration(100)
          .attr("r", d.radius * 1.1)
          .attr("fill", d.type === "location" ? "#BB0000" : "#264653");
      })
      .on("mouseout", function (event, d: any) {
        if (d.name === "Premix") return;
      
        d3.select(this)
          .transition()
          .duration(100)
          .attr("r", d.radius)
          .attr("fill", d.type === "location" ? "#BB0000" : "#264653");
      });
    node
      .append("text")
      .text((d: any) => d.name)
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      .attr("font-size", (d: any) =>
        d.name === "Premix"
          ? `${fontBase * 4}px`
          : `${fontBase + d.priority ** 2}px`
      )
      .attr("fill", "#fff")
      .style("pointer-events", "none");
  
    function ticked() {
      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    }
  }, []);
  

  return (
    <Container>
        <motion.div 
            className="flex flex-col items-center my-24"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        >
            <motion.div>
                <h3 className="text-black text-[53px] md:text-[68px] text-center font-bold text-white-800 mb-6 leading-[64px] md:leading-[74px]">Наши клиенты</h3>
                <p className=" text-black max-w-2xl text-center  mx-auto text-[18px] md:text-[20px] leading-[28px] font-semibold mb-6">
                    Нам доверяют вопрос вкуса и качества. 
                </p>
            </motion.div>
            <motion.div 
                className="relative flex justify-center items-center font-semibold "
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                >
                <svg ref={ref}></svg>
            </motion.div>
        </motion.div>

    </Container>

  );
}
// "use client";

// import { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { motion } from 'framer-motion'
// import Container from "../Container/Container";

// const clients = [
//   { name: "Bisou bisou", priority: 3 },
//   { name: "Wake up", priority: 2 },
//   { name: "Гостинная", priority: 1 },
//   { name: "Liu", priority: 2 },
//   { name: "Jeff", priority: 1 },
//   { name: "Fes", priority: 1 },
//   { name: "Центр", priority: 2 },
//   { name: "B1", priority: 1 },
//   { name: "Юта", priority: 1 },
//   { name: "Seasons of coffee", priority: 2 },
//   { name: "Пора вставать", priority: 2 },
//   { name: "Dose coffee", priority: 1 },
//   { name: "Le coffee", priority: 1 },
//   { name: "Coffee point", priority: 1 },
//   { name: "Pekarius", priority: 3 },
//   { name: "IMC", priority: 2 },
//   { name: "Парамакс", priority: 1 },
//   { name: "Kihas", priority: 1 },
//   { name: "Anish", priority: 1 },
//   { name: "Маяк", priority: 1 },
//   { name: "Twenty", priority: 1 },
//   { name: "Lit coffee", priority: 1 },
//   { name: "Location", priority: 1 },
//   { name: "Piko", priority: 1 },
//   { name: "Паразит", priority: 1 },
//   { name: "Coffeeteri", priority: 1 },
//   { name: "Safari", priority: 1 },
//   { name: "Орота", priority: 1 },
//   { name: "Baker park", priority: 1 },
//   { name: "Rush coffee", priority: 1 },
//   { name: "Costa rika", priority: 1 },
//   { name: "Camelia", priority: 1 },
//   { name: "Shirin coffee", priority: 2 },
//   { name: "B144", priority: 1 },
//   { name: "Unkai", priority: 1 },
//   { name: "Вшоколаде", priority: 1 },
//   { name: "Пикабу", priority: 1 },
//   { name: "Урбеч", priority: 1 },
//   { name: "Кик", priority: 1 },
//   { name: "Пять звезд", priority: 1 },
//   { name: "Рахат", priority: 1 },
//   { name: "Cava", priority: 1 },
//   { name: "Sv33", priority: 3 },
//   { name: "Village", priority: 1 },
//   { name: "Sharab coffee", priority: 1 },
//   { name: "Yr", priority: 1 },
//   { name: "Brioche", priority: 2 },
//   { name: "Mono", priority: 1 },
//   { name: "Velvet flowers", priority: 1 },
//   { name: "Mond", priority: 1 },
//   { name: "Ribsher", priority: 1 },
//   { name: "Астрамед", priority: 1 },
//   { name: "Чечня", priority: 2, type: 'location' },
//   { name: "Ингушетия", priority: 2, type: 'location' },
//   { name: "Симферополь", priority: 2, type: 'location' },
//   { name: "Татарстан", priority: 2, type: 'location' },
//   { name: "Москва", priority: 2, type: 'location' },
// ];

// export default function ClientsSection() {
//   const ref = useRef<SVGSVGElement | null>(null);

//   useEffect(() => {
//     const width = 800;
//     const height = 800;

//     const svg = d3
//       .select(ref.current)
//       .attr("width", width)
//       .attr("height", height)
//       .append("g");

//     const radiusScale = d3.scaleLinear().domain([1, 3]).range([35, 65]);

//     const centerNode = {
//       name: "Premix",
//       priority: 3,
//       radius: 100,
//       fx: width / 2,
//       fy: height / 2,
//     };

//     const nodes = [
//       centerNode,
//       ...clients.map((d) => ({
//         ...d,
//         radius: radiusScale(d.priority),
//       })),
//     ];

//     const simulation = d3
//       .forceSimulation(nodes)
//       .force("charge", d3.forceManyBody().strength(5))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius((d: any) => d.radius + 0.4))
//       .on("tick", ticked);
      
//     function pulse(selection) {
//       (function repeat() {
//         selection
//           .transition()
//           .duration(1000)
//           .attr("r", (d: any) => d.radius * 1.2)
//           .transition()
//           .duration(1000)
//           .attr("r", (d: any) => d.radius)
//           .on("end", repeat);
//       })();
//     }
//     const node = svg
//       .selectAll("g.node")
//       .data(nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node bubble");
      
//       node
//       .append("circle")
//       .attr("r", (d: any) => d.radius)
//       .attr("fill", (d: any) => {
//         if (d.name === "Premix") return "#264653";
//         return d.type === "location" ? "#BB0000" : "#BB0000"; 
//       })
//       .attr("stroke", (d: any) => d.type === "location" ? "#BB0000" : "none")
//       .attr("stroke-width", (d: any) => d.type === "location" ? 3 : 0);
    

//     node.selectAll("circle")
//       .filter((d: any) => d.type === "location")
//       .call(pulse);
//     node
//       .append("circle")
//       .attr("r", (d: any) => d.radius)
//       .attr("fill", (d: any) => (d.name === "Premix" ? "#264653" : "#BB0000"))
//       .style("transition", "all 0.3s ease")
//       .on("mouseover", function (event, d: any) {
//         if (d.name === "Premix") return;
      
//         d3.select(this)
//           .transition()
//           .duration(100)
//           .attr("r", d.radius * 1.1)
//           .attr("fill", d.type === "location" ? "#BB0000" : "#264653");
//       })
//       .on("mouseout", function (event, d: any) {
//         if (d.name === "Premix") return;
      
//         d3.select(this)
//           .transition()
//           .duration(100)
//           .attr("r", d.radius)
//           .attr("fill", d.type === "location" ? "#BB0000" : "#264653");
//       });
      

//     node
//       .append("text")
//       .text((d: any) => d.name)
//       .attr("text-anchor", "middle")
//       .attr("dy", ".3em")
//       .attr("font-size", (d: any) => (d.name === "Premix" ? "30px" : `${8+d.priority**2}px`))
//       .attr("fill", "#fff")
//       .style("pointer-events", "none");

//     function ticked() {
//       node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
//     }
//   }, []);

//   return (
//     <Container>
//         <motion.div 
//             className="flex flex-col items-center my-24"
//             animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
//         >
//             <motion.div>
//                 <h3 className="text-black text-[68px] text-center font-bold text-white-800 mb-6 leading-[74px]">Наши клиенты</h3>
//                 <p className=" text-black max-w-2xl text-center  mx-auto text-[20px] leading-[28px] font-semibold mb-6">
//                     Нам доверяют вопрос вкуса и качества. 
//                 </p>
//             </motion.div>
//             <motion.div 
//                 className="relative flex justify-center items-center font-semibold "
//                 whileHover={{ y: -5 }}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1 * 0.2 }}
//                 >
//                 <svg ref={ref}></svg>
//             </motion.div>
//         </motion.div>

//     </Container>

//   );
// }

