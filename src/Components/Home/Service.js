import React from 'react'
import tw from 'tailwind-styled-components'
import { FaTruck, FaMoneyBillWave } from 'react-icons/fa'
import { GiHotMeal, GiPayMoney } from 'react-icons/gi'

function Service() {
    return (
        <Container>
            <h1 className="w-full py-4 text-redfood text-center text-3xl" >Services</h1>

            <Wrapper>
                <IconContainer>
                    <Icon>  <FaTruck /></Icon>
                    <p>Free Delivery</p>
                </IconContainer>
                <IconContainer>
                    <Icon> <GiHotMeal /></Icon>
                    <p>Fresh Food</p>
                </IconContainer>
                <IconContainer>
                    <Icon>  <FaMoneyBillWave /></Icon>
                    <p>Affordable Prices</p>
                </IconContainer>
                <IconContainer>
                    <Icon>  <GiPayMoney /></Icon>
                    <p>Pay on Delivery</p>
                </IconContainer>
            </Wrapper>
        </Container>
    )
}

export default Service

const Container = tw.section` pb-10  `
const Wrapper = tw.div`
flex
text-redfood
mx-auto
lg:w-[60%]
w-[95%]
flex-wrap
py-6
`
const IconContainer = tw.div`
md:w-[25%]
w-[45%]
flex
my-4
items-center
flex-col
`
const Icon = tw.div`
grid
place-items-center
text-4xl
border-2
w-[40%]
aspect-[1/1]
border-dotted
rounded-full
border-redfood
`
