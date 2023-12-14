import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    angular
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer, Technology - Development & AI",
        company_name: "EPIC iO Technologies ",
        icon: estate,
        iconBg: "#accbe1",
        date: "feb. 2023 - jun. 2023",
        points: [
            "Creation IoT solutions, using Thingsboard.",
            "Creating customn widgets using Angular.",
            "Creating iot services API using Node js.",
            "Development of DeepInsights platform.",
            "Smart Spaces,Site Security,License Plate Recognition,Biosecurity.",
            "Building Solutions with Artificial Intelligence and IoT.",
            "Communication, real-time data, and sensor telemetry.",
        ],
    },
    {
        title: "Flow Specialist",
        company_name: "Avature",
        icon: estate,
        iconBg: "#fbc3bc",
        date: "ago. 2021 - feb. 2023",
        points: [
            "Working as Flow Specialist in templates Team, in order to create and modified websites using Html, JavaScript, Css and Twig.",
            "Keep a fluent communication with customer facing teams, to work on exactly what a customer needs.",
            "Get together with other teammates to develop websites, for different sized projects.",
            "Produce and maintain cross browser, cross platform, and high quality code.",
        ],
    },
    {
        title: "IoT Developer",
        company_name: "Freelancer",
        icon: estate,
        iconBg: "#b7e4c7",
        date: "ene. 2021 - dic. 2021",
        points: [
            "Specialize in creating user-friendly and visually appealing dashboards for IoT applications. ",
            "Deploying and managing MQTT brokers, establishing a reliable infrastructure for efficient communication among IoT devices. ",
            "RESTful design principles, ensuring interoperability and scalability.",
        ],
    },
    {
        title: "Project Engineer",
        company_name: "Flowserve Corporation",
        icon: estate,
        iconBg: "#accbe1",
        date: "dic. 2017 - ago. 2021",
        points: [
            "Strong knowledge of automation and control systems (PLC, HMI, SCADA,others)",
            "Experience within the Industrial Control Systems.",
            "Strong knowledge of OT communication protocols (modbus, ethernet, fieldbus, controlnet, profibus, profinet OPCHDA, OPC DA, OPC UA).",
            "Creation of technical documentation: General Arrangement, P&ID, Instruments List, API Auxiliary."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rch-goldsnaker',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/roger-chung-445170b9',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'IoT Dashboard',
        description: 'This is a very interesting project, where it starts from the programming of the Esp8266 and Esp32Cam devices together with the DHT11 temperature and humidity sensor, going through the frontend with Nuxt, then to the Backend with NodeJs, using a database with MongoDB, and finally an MQTT broker using EMQX. In the link you can see the static version on github pages.',
        link: 'https://rch-goldsnaker.github.io/iot-demo.github.io/dashboard',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Air Quality Monitor Iot',
        description: 'This application is a dashboard that shows the values obtained from various air sensors.It also helps the user to quickly identify the status of air quality.Within the app, the two air quality scales, such as PM2.5 and AQI, are displayed in the main part.then the temperature and pressure values are displayed.It also shows a table with the values obtained from the sensor.',
        link: 'https://rch-goldsnaker.github.io/Air_Quality_Monitor_Iot_App',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Online Banking App',
        description: 'This is a Full Stack application and was developed using React on the frontend, Node.js on the backend, and MongoDB as the database.This banking application provides a robust platform for users to perform transactions, view their accounts, and make transfers conveniently.With its home screen, dashboard, transaction visualization, and online banking capabilities, along with its responsive design, this application is a comprehensive solution for users banking needs.',
        link: 'https://online-banking-app-frontend.vercel.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Machine Learning',
        description: "Using TensorFlow.js - On this web you can see a machine learning application that can recognize random images.For the generation of random images we will use an external source such as 'picsum', and for image recognition we are going to use 'mobilenet'.",
        link: 'https://rch-goldsnaker.github.io/TensorFlowJS_Mobilenet_002',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'IoT Monitoring',
        description: 'Using Html, Javascript and CSS - It is a web site where a dashboard of temperature motor sensors are shown. This Front-end template can be integrated with a IoT Project for the temperature motor control and monitoring.This could help with the maintenance of the equipment and prevent future failures.',
        link: 'https://rch-goldsnaker.github.io/rch.goldsnaker',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Blog - IoT Projects',
        description: 'Using React, NextJs, GraphQL and Tailwind CSS - The Blog is called IoT Projects and it is a blog where I publish articles related to device configuration and programming, as well as IoT projects related to industrial automation and sensor monitoring.',
        link: 'https://r005-blog-next-js-graph-ql-tailwind-e64z3dvhj-rch-goldsnaker.vercel.app',
    }
];