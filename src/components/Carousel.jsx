import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import salon1 from "../assets/salon1.jpg"
import salon2 from "../assets/salon2.jpg"
import salon3 from "../assets/salon3.jpg"


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Salon1',
    imgPath: salon1,
  },
  {
    label: 'Salon2',
    imgPath: salon2,
  },
  {
    label: 'Salon3',
    imgPath: salon3,
  }
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        style={{
            marginLeft:"40%",
            marginRight:"50%",
            backgroundColor: "rgba(255,0,0,0)"
        }}
        activeStep={activeStep}
      />
    </Box>
  );
}

export default Carousel;