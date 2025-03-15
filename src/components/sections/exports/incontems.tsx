"use client"
import { useState } from "react";
import NicePage from "./nicePage";
import SliderCardComponent from "@/src/components/card/sliderCard";
import { CardSelectedProvider } from "@/src/context/CardSelectedContext";
import IncotermsComponent from "./incontemsWrapper";

export default function IncotermsWrapperComponent() {

  return (
    <CardSelectedProvider>
      <IncotermsComponent />
    </CardSelectedProvider>
  )
}

