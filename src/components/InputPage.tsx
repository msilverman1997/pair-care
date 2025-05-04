'use client'

import { InsuranceDetails } from "./InsuranceDetails"
import { UploadButton } from "./UploadButton"
import { UploadCard } from "./UploadCard"
import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { Stack } from "@mui/system"
import { askGemini } from "@/gemini/geminiApi"
import { get } from "http"

export const InputPage = () => {

  //TODO: File provider that cam contain multiple files
  const [file, setFile] = useState<File | undefined>()
  const [file2, setFile2] = useState<File | undefined>()

  const [deductibleLeft, setDeductibleLeft] = useState<string>("")
  const [outOfPocketLeft, setOutOfPocketLeft] = useState<string>("")
  const [copayAmount, setCopayAmount] = useState<string>("")
  const [descriptionOfVisit, setDescriptionOfVisit] = useState<string>("")
  const [response, setResponse] = useState<string>("")

  const getGeminiResponse = async () => {
    const response = await askGemini(file)
    setResponse(response)
  }

  return (
    <Stack px={8} py={4}>
      <UploadCard />
      <UploadButton header="EOB" file={file} setFile={setFile}/>
      <UploadButton header="Itemized Bill" file={file2} setFile={setFile2}/>
      <InsuranceDetails deductibleLeft={deductibleLeft}
        setDeductibleLeft={setDeductibleLeft}
        outOfPocketLeft={outOfPocketLeft}
        setOutOfPocketLeft={setOutOfPocketLeft}
        copayAmount={copayAmount}
        setCopayAmount={setCopayAmount}
        descriptionOfVisit={descriptionOfVisit}
        setDescriptionOfVisit={setDescriptionOfVisit} />
      <Button variant="contained" sx={{ mt: 4 }} onClick={getGeminiResponse}>
        Submit
      </Button>
      <Typography>{response ?? 'No Response Yet'}</Typography>
    </Stack>
  )
}