
import React, { useState } from 'react';
import { Dialog, DialogContent } from './dialog';
import { AspectRatio } from './aspect-ratio';

interface ImageViewerProps {
  src: string;
  alt: string;
}

export function ImageViewer({ src, alt }: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
