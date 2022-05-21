import React from 'react'
import tw from "tailwind-styled-components";

function FoodPageSideBar() {
    return (
        <Container>
            <Wrapper>

                <TopHead>Filter</TopHead>
                <hr />
                <Group>
                    <Head>Price</Head>

                    <Option>

                        <Checkbox type="checkbox" id="100" />
                        <OptionText htmlFor="100" >Under &#8377;100</OptionText>
                    </Option>
                    <Option>

                        <Checkbox type="checkbox" id="101" />
                        <OptionText htmlFor="101">&#8377;101 to &#8377;250</OptionText>
                    </Option>
                    <Option>

                        <Checkbox type="checkbox" id="251" />
                        <OptionText htmlFor="251">&#8377;251 to &#8377;500</OptionText>
                    </Option>
                    <Option>

                        <Checkbox type="checkbox" id="501" />
                        <OptionText htmlFor="501">&#8377;501+</OptionText>
                    </Option>
                </Group>
                <Group>
                    <Head>Type</Head>

                    <Option>

                        <Checkbox type="checkbox" id="veg" />
                        <OptionText htmlFor="veg" >Veg</OptionText>
                    </Option>
                    <Option>

                        <Checkbox type="checkbox" id="non-veg" />
                        <OptionText htmlFor="non-veg" >Non Veg</OptionText>
                    </Option>
                    <Option>

                        <Checkbox type="checkbox" id="vegan" />
                        <OptionText htmlFor="vegan" >Vegan</OptionText>
                    </Option>
                    <Option>

                        <Checkbox type="checkbox" id="all" />
                        <OptionText htmlFor="all" >All</OptionText>
                    </Option>
                </Group>
            </Wrapper>

        </Container>
    )
}

export default FoodPageSideBar

const Container = tw.div` h-screen w-[20%]  hidden xl:block  `
const Wrapper = tw.div`fixed bg-white w-[15%] h-[80vh]  p-10`
const TopHead = tw.h3`text-3xl mb-2`
const Head = tw.h5`text-2xl my-3`
const Group = tw.div`mt-8`
const Option = tw.div`flex items-center mt-2`
const Checkbox = tw.input`w-5 h-5 mr-3 `
const OptionText = tw.label` text-lg text-black/80`
