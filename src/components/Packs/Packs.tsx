import {
    chakra,
    VStack,
    HStack,
    Text,
    Container,
    Box,
    Icon,
    Button,
    SimpleGrid,
    useColorModeValue
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { BiCheck } from 'react-icons/bi';
  import { MdFastfood,MdFoodBank} from 'react-icons/md';
  import { FaBowlFood } from 'react-icons/fa6';
  import { IconType } from 'react-icons';

  const plansList = [
    {
      title: 'Simple',
      price: 490,
      icon:FaBowlFood ,
      features: ['Choose from Menu', '2 Meals', 'Call in and Taste', 'No Customization']
    },
    {
      title: 'Double',
      price: 790,
      icon:MdFastfood ,
      features: [
        'Browse menus and choose ',
        '4 Meals',
        'Rating your Meal',
        'Make your own Meal'
      ]
    },
    {
      title: 'Full',
      price: 990,
      icon: MdFoodBank,
      features: [
        'Enjoy unlimited choice',
        'large customization',
        'Beverages and more',
        'Takeout Options',

      ]
    }
  ];

  const Packs = () => {
    return (
      <Container maxW="7xl" py="8" px="0">
        <chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center" mb={5}>
         Affordable Pricing for your upcoming meals
        </chakra.h2>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1} mt={4}>
          {plansList.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </SimpleGrid>
      </Container>
    );
  };

  interface PricingCardProps {
    title: string;
    price: number;
    features: string[];
    icon: IconType;
  }

  const PricingCard = ({ title, price, icon, features }: PricingCardProps) => {
    return (
      <Box
        minW={{ base: 'xs', sm: 'xs', lg: 'sm' }}
        rounded="md"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="md"
        marginInline="auto"
        my={3}
        p={6}
      >
        <Box textAlign="center">
          <Icon as={icon} h={10} w={10} color="red.600" />
          <chakra.h2 fontSize="2xl" fontWeight="bold">
            {title}
          </chakra.h2>
          <Text fontSize="7xl" fontWeight="bold">
            <Text as="sup" fontSize="3xl" fontWeight="normal" top="-1em">
             MAD
            </Text>
            {price}
          </Text>
          <Text fontSize="md" color="gray.500">
            per month
          </Text>
        </Box>
        <VStack spacing={2} alignItems="flex-start" my={6}>
          {features.map((feature, index) => (
            <HStack key={index} spacing={3}>
              <Icon as={BiCheck} h={4} w={4} color="red.600" />
              <Text fontSize="sm" color="gray.500">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>
        <Button colorScheme='red' variant="solid" size="md" rounded="md" w="100%">
          Choose Plan
        </Button>
      </Box>
    );
  };

  export default Packs;