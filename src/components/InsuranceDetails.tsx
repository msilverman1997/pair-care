import { Stack, TextField } from "@mui/material"

interface InsuranceDetailsProps {
    deductibleLeft: string
    outOfPocketLeft: string
    copayAmount: string
    descriptionOfVisit: string
    coinsuranceAmount: string
    setDescriptionOfVisit: (value: string) => void
    setDeductibleLeft: (value: string) => void
    setOutOfPocketLeft: (value: string) => void
    setCopayAmount: (value: string) => void
    setCoinsuranceAmount: (value: string) => void
}

export const InsuranceDetails = (
    { deductibleLeft,
        outOfPocketLeft,
        copayAmount,
        descriptionOfVisit,
        coinsuranceAmount,
        setDeductibleLeft,
        setOutOfPocketLeft,
        setCopayAmount,
        setCoinsuranceAmount,
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

    const handleCoinsuranceAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCoinsuranceAmount(event.target.value)
    }

    const handleDescriptionOfVisitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionOfVisit(event.target.value)
    }

    return (
        <Stack pt={8} rowGap={2}>
        <TextField
    label="Deductible Left"
    value={deductibleLeft}
    onChange={handleDeductibleLeftChange}
    helperText="Amount remaining on your deductible (e.g., $500)"
  />
  <TextField
    label="Out of Pocket Left"
    value={outOfPocketLeft}
    onChange={handleOutOfPocketLeftChange}
    placeholder="$1,200"
    helperText="Remaining out-of-pocket max (e.g., $1,200)"
  />
  <TextField
    label="Copay Amount"
    value={copayAmount}
    onChange={handleCopayAmountChange}
    helperText="Your expected share per visit (e.g., $30). Leave blank if coinsurance for visit type"
  />
 <TextField
    label="Coinsurance"
    value={coinsuranceAmount}
    onChange={handleCoinsuranceAmountChange}
    helperText="Your expected share per visit (20%). Leave blank if copay for visit type"
  />
  <TextField
    label="Description of Visit"
    value={descriptionOfVisit}
    onChange={handleDescriptionOfVisitChange}
    helperText="Brief reason for visit (e.g., 'ER visit for headache')"
  />
</Stack>)

}