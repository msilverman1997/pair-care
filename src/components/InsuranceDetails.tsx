import { Stack, TextField } from "@mui/material"

interface InsuranceDetailsProps {
    deductibleLeft: string
    outOfPocketLeft: string
    copayAmount: string
    descriptionOfVisit: string
    setDescriptionOfVisit: (value: string) => void
    setDeductibleLeft: (value: string) => void
    setOutOfPocketLeft: (value: string) => void
    setCopayAmount: (value: string) => void
}

export const InsuranceDetails = (
    { deductibleLeft,
        outOfPocketLeft,
        copayAmount,
        descriptionOfVisit,
        setDeductibleLeft,
        setOutOfPocketLeft,
        setCopayAmount,
        setDescriptionOfVisit }: InsuranceDetailsProps) => {

    const handleDeductibleLeftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeductibleLeft(event.target.value)
    }

    const handleOutOfPocketLeftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutOfPocketLeft(event.target.value)
    }

    const handleCopayAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCopayAmount(event.target.value)
    }

    const handleDescriptionOfVisitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionOfVisit(event.target.value)
    }

    return (
        <Stack pt={8} rowGap={2}>
            <TextField label='Deductible Left' value={deductibleLeft} onChange={handleDeductibleLeftChange}></TextField>
            <TextField label='Out of Pocket Left' value={outOfPocketLeft} onChange={handleOutOfPocketLeftChange}></TextField>
            <TextField label='Copay Amount' value={copayAmount} onChange={handleCopayAmountChange}></TextField>
            <TextField label='Description of Visit' value={descriptionOfVisit} onChange={handleDescriptionOfVisitChange}></TextField>
        </Stack>)

}