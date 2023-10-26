import { Grid, Flex,Text,Spinner } from '@chakra-ui/react'
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
      throw new Error('Check your APIS ');
    }
  };

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['data'], queryFn: fetchData , retry:2,})


    if (isLoading) {
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /> ;
  }

  if (isError) {
    return <Text fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>Error: {error.message}</Text>;
  }

else{
    return (
        <Flex
        direction="column"
        justifyContent="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        minH="100vh"
      >
    <Text fontWeight={500} fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>  Here are our choices</Text>
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
}}

export default Food
