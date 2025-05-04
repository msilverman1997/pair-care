'use client'
import { Button, Stack, Typography } from "@mui/material"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import { useState } from "react"

interface UploadButtonProps {
    header: string,
    file?: File | undefined,
    setFile: (file: File | undefined) => void
}

export const UploadButton = ({ header, file, setFile }: UploadButtonProps) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || undefined
        if (selectedFile) {
            setFile(selectedFile)
        }
    }

    console.log('File:', file)

    return (
        <Stack direction="row" width="full" justifyContent="space-between" pt={8}>
            <Typography>{header}</Typography>
            <Stack gap={1}>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<FileUploadIcon />}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={handleFileChange}
                    />
                </Button>
                {file && <Typography>{file.name}</Typography>}
            </Stack>
        </Stack>
    )
}