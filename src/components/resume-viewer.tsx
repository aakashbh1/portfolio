'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ResumeViewerProps {
  children: React.ReactNode;
  pdfUrl: string;
}

export default function ResumeViewer({ children, pdfUrl }: ResumeViewerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Aakash Bhargava&apos;s Resume</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2 h-full">
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-md border"
            title="Aakash Bhargava's Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
