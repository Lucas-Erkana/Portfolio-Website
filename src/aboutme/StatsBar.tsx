import React from "react";
import { Box } from "@chakra-ui/core";
import { SingleStatContainer, StatBar, StatBarWhole } from "src/aboutme/Styles";

import { motion } from "framer-motion";

type StatsBarProps = {
  label: string;
  stat: number;
};

const StatsBar: React.FC<StatsBarProps> = ({ label, stat }) => {
  return (
    <>
      <SingleStatContainer>
        <Box color="Paragraph">{label}</Box>
        <StatBarWhole>
          <StatBar width={stat}>
            <Box ml="15px">{stat}/100</Box>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
    </>
  );
};

export default StatsBar;