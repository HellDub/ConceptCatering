import { Grid, Flex,Text } from '@chakra-ui/react'
import Card from '../Card/FoodCard'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



const Food = () => {

const fetchData = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const {data} = await axios.get(' http://localhost:3000/food',config);
      console.log(data);
      return data;

    } catch (error) {
      throw new Error('Failed to fetch data from the API');
    }
  };

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['data'], queryFn: fetchData })
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }


    return (
        <Flex
        direction="column"
        justifyContent="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        minH="100vh"
      >
    <Text fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>  Here are our choices</Text>
    <br />
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
        >
          {data.map((food:any) => (
            <Card key={food.id} {...food} />
          ))}
        </Grid>
      </Flex>
    )
}

export default Food
