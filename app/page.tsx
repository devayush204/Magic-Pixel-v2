"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroGeometric from "@/components/landingPage/Main";
import Section1 from "@/components/landingPage/Section1";
import PricingSection from "@/components/landingPage/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen ">
        <HeroGeometric/>
        <Section1/>
        <PricingSection/>
    </div>
  );
} 