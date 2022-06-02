import React from 'react'
import tw from 'tailwind-styled-components'

function TrialPage() {
    return (
        <Container>
            <Wrapper>
                <Img src='./images/trailpageimg.jpg' />
                <Card>
                    <Trial>

                        <TopHead>Get One Week Free</TopHead>

                        <Button>Start Trial</Button>

                    </Trial>
                    <Details>

                        <Group>

                            <Head>What you Get1</Head>
                            <ul>
                                <Li>Custom tailored diet plans.

                                </Li>
                                <Li>Free from refined sugars & trans fats.
                                </Li>
                                <Li>Different menu every day.</Li>
                                <Li>
                                    Flexibility of plans
                                </Li>
                                <Li>Ongoing nutritionist support.</Li>
                            </ul>
                        </Group>
                        <Group>
                            <Head>What you Get1</Head>
                            <ul>
                                <Li>Custom tailored diet plans.

                                </Li>
                                <Li>Free from refined sugars & trans fats.
                                </Li>
                                <Li>Different menu every day.</Li>
                                <Li>
                                    Flexibility of plans
                                </Li>
                                <Li>Ongoing nutritionist support.</Li>
                            </ul>
                        </Group>
                        <Group>
                            <Head>What you Get1</Head>
                            <ul>
                                <Li>Custom tailored diet plans.

                                </Li>
                                <Li>Free from refined sugars & trans fats.
                                </Li>
                                <Li>Different menu every day.</Li>
                                <Li>
                                    Flexibility of plans
                                </Li>
                                <Li>Ongoing nutritionist support.</Li>
                            </ul>
                        </Group>
                        <Group>
                            <Head>What you Get1</Head>
                            <ul>
                                <Li>Custom tailored diet plans.

                                </Li>
                                <Li>Free from refined sugars & trans fats.
                                </Li>
                                <Li>Different menu every day.</Li>
                                <Li>
                                    Flexibility of plans
                                </Li>
                                <Li>Ongoing nutritionist support.</Li>
                            </ul>
                        </Group>
                    </Details>

                </Card>
            </Wrapper>
        </Container >
    )
}

export default TrialPage
const Container = tw.div` mt-[15vh] 	`
const Wrapper = tw.div` flex items-center mx-auto w-[90vw]  shadow-xl overflow-hidden flex-col`
const Img = tw.img` w-full max-h-[50vh]  object-cover`
const Card = tw.div`-mt-[5vh] w-full rounded-xl bg-white `

const Trial = tw.div`flex justify-between	 mb-5 shadow-redfood shadow-md py-4 px-[5vw] w-full items-center	`
const TopHead = tw.h1`text-2xl  `
const Button = tw.button` bg-redfood hover:bg-orangefood  text-white  py-4 rounded-full  w-[30%] min-w-[100px] max-w-[200px] font-bold text-sm `

const Details = tw.div`overflow-scroll px-[5vw]   max-h-[70vh]`
const Group = tw.div`my-5`
const Head = tw.h3`text-xl `
const Li = tw.li`list-disc	`
