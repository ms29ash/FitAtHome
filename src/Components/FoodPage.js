import React, { useEffect, useContext } from 'react'
import FoodPgCard from './FoodPgCard';
import tw from "tailwind-styled-components";
import FoodPageSideBar from './FoodPageSideBar';
import FoodPageMain from './FoodPageMain';

function FoodPage(props) {


    return (
        <Page>
            <Container>

                <FoodPageSideBar />
                <FoodPageMain />
            </Container>
        </Page>
    )
}

export default FoodPage

const Container = tw.div` flex w-[90vw]  mx-auto  `
const Page = tw.div` mt-[12vh] py-200`
