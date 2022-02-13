import React from 'react';
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";

export default ({post}) => {
    return (
        <Card className="mb-3">
            <CardContent>
                <Typography variant="body2">
                    {post.title}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'none' }}>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}