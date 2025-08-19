import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
 


import React, { useEffect } from 'react';
import {
  BarChart3, Globe2, LineChart, Radar, TrendingUp, Search, Eye, Zap, ArrowRight
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";




function Test(){

 const services = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Behavioral Segmentation",
      description: "Group customers based on actions, preferences, and patterns to deliver targeted experiences.",
      features: ["Purchase patterns", "Engagement cohorts", "Intent-based segmentation"],
      image: "",
      imageAlt: "Machine Learning Models",
      reverse: false,
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Journey Mapping",
      description: "Visualize customer interactions across touchpoints to identify gaps and opportunities.",
      features: ["Funnel analysis", "Drop-off tracking", "Channel attribution"],
      image: "",
      imageAlt: "Machine Learning Models",
      reverse: false,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Insights",
      description: "Forecast behaviors like churn, conversion, or lifetime value using predictive models.",
      features: ["Churn prediction", "LTV estimation", "Conversion scoring"],
      image: "",
      imageAlt: "Machine Learning Models",
      reverse: false,
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Real-Time Dashboards",
      description: "Track live metrics and KPIs to inform agile decisions and personalized marketing.",
      features: ["Custom dashboards", "Real-time metrics", "Alert systems"],
      image: "",
      imageAlt: "Machine Learning Models",
      reverse: false,
    }
  ];

 

  return (
    <>
    <br /><br /><br />
    <br /><br /><br />
    
  <Navbar />

    </>
  );
};

export default Test
