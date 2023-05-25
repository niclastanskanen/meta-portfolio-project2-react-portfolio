import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderRadius="md"
      borderColor="gray.200"
      alignItems="start"
      bg="white"
    >
      <Image 
        src={imageSrc} 
        alt={title}
        borderRadius="md"
      />

      <VStack spacing={2} p={2} alignItems="start">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <Text color="black" fontSize="sm">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
