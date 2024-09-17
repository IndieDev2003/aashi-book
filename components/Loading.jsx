import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CircularProgress  value={66} />
      </Box>
    </div>
  );
};

export default Loading;
