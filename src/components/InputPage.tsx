import { useState } from "react"
import { InsuranceDetails } from "./InsuranceDetails"
import { UploadButton } from "./UploadButton"
import { UploadCard } from "./UploadCard"

export const InputPage = () => {

const [deductibleLeft, setDeductibleLeft] = useState<string>("")
const [outOfPocketLeft, setOutOfPocketLeft] = useState<string>("")
const [copayAmount, setCopayAmount] = useState<string>("")
const [descriptionOfVisit, setDescriptionOfVisit] = useState<string>("")

    return (
            <>
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
            </>
    )
}