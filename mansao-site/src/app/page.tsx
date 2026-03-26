"use client";

import CarouselHeader from "@/components/CarouselHeader/carouselheader";
import Header from "@/components/Header/header";
import { Box, Text } from "@chakra-ui/react";
import { Carousel } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";


export default function Home() {

    return (
        <Box>
            <Header />
            <CarouselHeader/>
        </Box>
    );
}
