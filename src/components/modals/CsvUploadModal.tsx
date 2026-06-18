import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type CsvUploadModalProps = {
  open: boolean;

  onOpenChange: (
    open: boolean
  ) => void;
};

export const CsvUploadModal = ({ open, onOpenChange }: CsvUploadModalProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (!selectedFile.name.toLowerCase().endsWith(".csv")) { return; }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  const downloadFile = () => {
    if (!file) return;

    const url = URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = url;

    link.download = file.name;

    link.click();

    URL.revokeObjectURL(url);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Upload CSV
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            type="file"
            accept=".csv"
            onChange={
              handleFileChange
            }
          />

          {file && (
            <div className="rounded-lg border p-4 space-y-2">
              <p className="font-medium">
                {file.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {(file.size / 1024).toFixed(2)}
                KB
              </p>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={downloadFile}
                >
                  Download
                </Button>

                <Button
                  variant="destructive"
                  onClick={removeFile}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}