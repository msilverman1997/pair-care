import { Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

export const UploadCard = () => {

    return (
        <Card sx={{ minWidth: 275, height: 175 }}>
            <CardContent sx={{ gap: 2 }}>
                <Typography variant="h5">Welcome to Pair Care</Typography>
                <Typography variant="body1">Upload your medical bill information. The more information you upload, the better! Upon submitting, you will receive details on how to potentially lower your bill.</Typography>
            </CardContent>
        </Card>
    )

}