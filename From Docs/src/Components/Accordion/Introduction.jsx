import { ArrowDownward, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const controlledAccordionData = [
  {
    id: 1,
    title: "General settings",
    subtitle: "I am an accordion",
    description:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    id: 2,
    title: "Users",
    subtitle: "You are currently not an owner",
    description:
      "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
  },
  {
    id: 3,
    title: "Advanced settings",
    subtitle: "Filtering has been entirely disabled for whole web server",
    description:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    id: 4,
    title: "Personal data",
    description:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
];

const Introduction = () => {
  const [expendedTransition, setExpendedTransition] = useState(false);

  const [controlledExpandId, setControlledExpandId] = useState(0);
  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            asperiores ipsa expedita pariatur nostrum dolore sunt cupiditate
            suscipit hic itaque quidem incidunt, repudiandae porro sequi!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordio 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            cumque, delectus eligendi deserunt eum amet, saepe dicta ducimus,
            quasi excepturi aut explicabo neque minima doloremque consequuntur
            quidem exercitationem quisquam dolorum assumenda illum voluptatem
            molestiae officiis ea est? Provident, obcaecati, facilis delectus
            dolor consectetur optio et porro quam debitis, non quis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quaerat, magnam corrupti obcaecati veritatis cumque totam ad vitae
            est eius ipsam minima repudiandae eligendi earum qui et temporibus
            saepe ducimus!
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quaerat, magnam corrupti obcaecati veritatis cumque totam ad vitae
            est eius ipsam minima repudiandae eligendi earum qui et temporibus
            saepe ducimus!
          </Typography>
        </AccordionDetails>
        <AccordionActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="contained">Cancel</Button>
          <Button variant="outlined">Agree</Button>
        </AccordionActions>
      </Accordion>

      <Accordion disabled>
        <AccordionSummary expandIcon={<ArrowDownward />}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion
        expanded={expendedTransition}
        onChange={() => setExpendedTransition((prev) => !prev)}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expendedTransition ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expendedTransition ? "block" : "none",
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Custom transition using Fade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            hic, ut saepe corporis cupiditate mollitia repellendus! Excepturi
            aliquam distinctio quibusdam?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Paper sx={{ p: 3, my: 3 }}>
        {controlledAccordionData.map(({ id, title, subtitle, description }) => (
          <Accordion
            key={id}
            expanded={id === controlledExpandId}
            onChange={() =>
              setControlledExpandId((prev) => (prev === id ? 0 : id))
            }
          >
            <AccordionSummary
              aria-controls={`${id}-${title}`}
              expandIcon={
                <IconButton>
                  <ExpandMore />
                </IconButton>
              }
            >
              <Stack
                flex={1}
                display="flex"
                direction={{ xs: "column", sm: "row" }}
              >
                {title && (
                  <Typography
                    sx={{
                      width: "40%",
                      flexShrink: 0,
                    }}
                  >
                    {title}
                  </Typography>
                )}
                {subtitle && <Typography>{subtitle}</Typography>}
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default Introduction;
