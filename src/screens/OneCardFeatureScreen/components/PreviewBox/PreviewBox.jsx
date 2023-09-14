import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PreviewBox = () => {
    return (
        <Box>
            <Button type="submit" size="small" sx={{ fontSize: "1rem", fontWeight: "600" }}>PUBLISH</Button>
        </Box>
    );
};

export default PreviewBox;