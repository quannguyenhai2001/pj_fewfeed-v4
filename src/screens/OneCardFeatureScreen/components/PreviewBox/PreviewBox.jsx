
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

export default function PreviewBox({ values }) {
    return (
        <Box>

            <Card sx={{ maxWidth: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title="Page title"
                        subheader="page id"
                    />
                    <Button type="submit" size="small" sx={{ fontSize: "1rem", fontWeight: "600", marginRight: "16px", backgroundColor: "#22c55e", color: "white" }}>PUBLISH</Button>
                </Box>
                <Typography variant="h5" sx={{
                    marginLeft: "16px"
                }} >
                    {values.primaryText}
                </Typography>
                <Box sx={{
                    border: "3px solid #60a5fa",
                    borderRadius: "15px",
                    margin: " 0 16px 16px 16px"
                }}>
                    {values.image ? <CardMedia
                        component="img"
                        height="400px"
                        image={URL.createObjectURL(values.image)}
                        sx={{ borderBottom: "1px solid gray", borderRadius: "15px 15px 0 0" }}
                        alt="Paella dish"
                    /> : <Box sx={{ height: "400px", display: "grid", placeItems: "center", borderBottom: "1px solid gray" }}>No image</Box>}

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {values.fakeLink}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="h5">
                                {values.title}
                            </Typography>
                            <Button size="small" sx={{ fontSize: "1rem", fontWeight: "600" }}>{values.cardButton}</Button>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {values.fakeLinkDescription}
                        </Typography>
                    </CardContent>
                </Box>


            </Card >
        </Box >
    );
}