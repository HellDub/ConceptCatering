import { Box, Flex } from '@chakra-ui/react'
import Card from '../Card/FoodCard'



const data: any= [
    {
        isNew: true,
        imageURL:
            'https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg',
        name: 'Classic Ice Cream',
        price: 20,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: false,
        imageURL:
            'https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg',
        name: 'Hamburger Filly',
        price: 45,
        rating: 4.8,
        numReviews: 33,
    },  {
        isNew: true,
        imageURL:
            'https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg',
        name: 'Hot ChickWings',
        price: 35,
        rating: 4.5,
        numReviews: 33,
    },
]

const Food = () => {
    return (
        <Box
        display={"flex"}
        flexDirection={"row"}
    maxW="5xl"
    mx="auto"
    px={{ base: '2', md: '4', lg: '6' }}
    py={{ base: '2', md: '4', lg: '6' }}
  >

            {data.map((item: any) => (
                <Card data={item} />
            ))}

        </Box>
    )
}

export default Food
