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

  console.log('Api Key:', process.env.NEXT_PUBLIC_GEMINI_API_KEY)

  const [deductibleLeft, setDeductibleLeft] = useState<string>("")
  const [outOfPocketLeft, setOutOfPocketLeft] = useState<string>("")
  const [copayAmount, setCopayAmount] = useState<string>("")
  const [descriptionOfVisit, setDescriptionOfVisit] = useState<string>("")
  const [response, setResponse] = useState<string>("")

  const getGeminiResponse = async () => {
    const response = await askGemini()
    setResponse(response)
  }

  return (
    <Stack px={8} py={4}>
      <UploadCard />
      <UploadButton header="EOB" />
      <UploadButton header="Itemized Bill" />
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