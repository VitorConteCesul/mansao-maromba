"use client"

import { Box } from "@chakra-ui/react";
import NextImage from 'next/image';

interface ImagemLancamentosProps {
    src: string;
    alt: string;
}

export default function ImagemLancamentos({src, alt}: ImagemLancamentosProps) {
    return (
        <Box
            overflow="hidden"
            _hover={{
                "& img": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <NextImage
                src={src}
                alt={alt}
                height={1493}
                width={1080}
                style={{
                    transition: "transform 0.3s ease-in-out",
                }}
            />
        </Box>
    );
}
