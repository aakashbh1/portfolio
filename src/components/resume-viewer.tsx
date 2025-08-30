'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ResumeViewerProps {
  children: React.ReactNode;
  url: string;
}

export default function ResumeViewer({ children, url }: ResumeViewerProps) {
  // We use Google's document viewer to embed the PDF and avoid cross-origin issues.
  const embedUrl = `https://docs.google.com/gview?url=${url}&embedded=true`;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] p-0">
        <DialogHeader className="p-4 flex flex-row items-center justify-between border-b">
          <DialogTitle>My Resume</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex-grow h-full">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            title="Aakash Bhargava's Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
