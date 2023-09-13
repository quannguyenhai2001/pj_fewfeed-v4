import React, { memo } from "react";

import { Box } from "@mui/material";


const DefaultLayout = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export default memo(DefaultLayout);