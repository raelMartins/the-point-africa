import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// Define the props for the ExpandedView component
interface ExpandedBoxProps extends BoxProps {
  src: string;
  alt: string;
}

// Create a motion-enabled Chakra components for the backdrop
const ExpandedBox: React.FC<ExpandedBoxProps> = Box;
type ExpandedViewProps = {
  layoutID: string;
  onDismiss: () => void;
  image: string;
};
const MotionBox = motion.create(ExpandedBox);

export const ExpandedImageView: React.FC<ExpandedViewProps> = ({
  layoutID,
  onDismiss,
  image
}) => {
  if (!image) return null;

  return (
    <Box
      position='fixed'
      inset={0}
      zIndex={50}
      display='flex'
      alignItems='center'
      justifyContent='center'
      onClick={onDismiss}
    >
      {/* Overlay backdrop with a fade transition */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        position='absolute'
        inset={0}
        cursor='pointer'
        bg='blackAlpha.800'
      />

      {/* The expanded image, linked to the gallery thumbnail via layoutId */}
      <MotionBox
        as='img'
        src={image}
        alt={`Image`}
        layoutId={layoutID}
        zIndex={50}
        maxH='90vh'
        maxW='90vw'
        rounded='lg'
        boxShadow='2xl'
      />
    </Box>
  );
};
