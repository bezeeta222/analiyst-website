import { Box } from '@mui/material';
import * as React from 'react'
import { Ticker } from "react-ts-tradingview-widgets";


const TradingWidget = () => {
   
    return (
        <Box >
            <Ticker colorTheme="dark" ></Ticker>
        </Box>
    )
  }
  export default TradingWidget;
  
