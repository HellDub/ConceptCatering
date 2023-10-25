import { Text, Image, Box, Stack, Heading, Button,useColorModeValue } from "@chakra-ui/react";

interface FoodCardProps {
    id:number;
    image: string;
    name: string;
    price: number;
}

const FoodCard = ({ id,image, name, price }: FoodCardProps) => (
  <Stack rounded={10} alignItems={"center"}   boxShadow={'2xl'}  bg={useColorModeValue('gray.100', 'gray.800')} key={id} p={10}>
    <Box boxSize="200px" > <Image  rounded={10}  boxSize="100%" objectFit="cover"  src={image} alt={"someAlt"} /></Box>

    <Text color="teal.600" fontWeight={500} textTransform="uppercase">
      Best Choice
    </Text>

    <Heading color="blue.600" size="md" textTransform="capitalize">
      {name}
    </Heading>
    <Box>
      {price} $
    </Box>
    <Button  colorScheme="red" size="sm">
          Add to cart </Button>
  </Stack>
);

export default FoodCard;