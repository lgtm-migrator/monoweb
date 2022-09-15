import React from "react"
import { styled } from "@theme"
import { Button } from "@dotkom/ui"
import { CareerAdView } from "@components/views/CareerAdView"

const Home: React.FC = () => {
  return (
    <Box>
      <CareerAdView />
    </Box>
  )
}

const Box = styled("div", {})

export default Home
