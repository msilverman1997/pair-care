'use client'
import { Button, Stack, Typography } from "@mui/material"
import { useState } from "react"

interface UploadButtonProps {
    header: string
}

export const UploadButton = ({ header }: UploadButtonProps) => {

    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null
        setFile(selectedFile)
    }

    return (
        <Stack direction="row" width="full" justifyContent="space-between" pt={8}>
            <Typography>{header}</Typography>
            <Stack gap={1}>
                <Button
                    variant="contained"
                    component="label"
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