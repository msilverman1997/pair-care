import { Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

export const UploadCard = () => {

    return (
        <Card sx={{ minWidth: 275, height: 175 }}>
            <CardContent sx={{ gap: 2 }}>
                <Typography variant="h5">Upload Information</Typography>
                <Typography variant="body1">The more information you upload, the better!</Typography>
            </CardContent>
        </Card>
    )

}