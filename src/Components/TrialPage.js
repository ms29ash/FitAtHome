import React from 'react'
import tw from 'tailwind-styled-components'

function TrialPage() {
    return (
        <Container>
            <Wrapper>
                <Img src='./images/trailpageimg.jpg' />
                <Card>
                    <Trial>

                        <TopHead>Free Trial</TopHead>

                        <Button>Start Trial</Button>

                    </Trial>
                    <Details>

                        <Head>What you Get1</Head>
                        <ul>
                            <li>Custom tailored diet plans.

                            </li>
                            <li>Free from refined sugars & trans fats.
                            </li>
                            <li>Different menu every day.</li>
                            <li>
                                Flexibility of plans
                            </li>
                            <li>Ongoing nutritionist support.</li>
                        </ul>
                        <Head>What you Get1</Head>
                        <ul>
                            <li>Custom tailored diet plans.

                            </li>
                            <li>Free from refined sugars & trans fats.
                            </li>
                            <li>Different menu every day.</li>
                            <li>
                                Flexibility of plans
                            </li>
                            <li>Ongoing nutritionist support.</li>
                        </ul>
                        <Head>What you Get1</Head>
                        <ul>
                            <li>Custom tailored diet plans.

                            </li>
                            <li>Free from refined sugars & trans fats.
                            </li>
                            <li>Different menu every day.</li>
                            <li>
                                Flexibility of plans
                            </li>
                            <li>Ongoing nutritionist support.</li>
                        </ul>
                        <Head>What you Get1</Head>
                        <ul>
                            <li>Custom tailored diet plans.

                            </li>
                            <li>Free from refined sugars & trans fats.
                            </li>
                            <li>Different menu every day.</li>
                            <li>
                                Flexibility of plans
                            </li>
                            <li>Ongoing nutritionist support.</li>
                        </ul>

                    </Details>

                </Card>
            </Wrapper>
        </Container>
    )
}

export default TrialPage
const Container = tw.div` mt-[15vh] 	`
const Wrapper = tw.div` flex items-center mx-auto w-[90vw]  shadow-xl overflow-hidden flex-col`
const Img = tw.img` w-full max-h-[50vh]  object-cover`
const Card = tw.div`-mt-[5vh] w-full rounded-xl bg-white `

const Trial = tw.div`flex justify-between	 mb-5 shadow-redfood shadow-lg py-4 px-3 w-full items-center	`
const TopHead = tw.h1`text-3xl  `
const Button = tw.button` bg-redfood hover:bg-orangefood  text-white  py-4 rounded-full  w-[30%] min-w-[100px] max-w-[200px] font-bold text-sm `

const Details = tw.div`overflow-scroll px-5   max-h-[70vh]`
const Head = tw.h3`text-2xl `
