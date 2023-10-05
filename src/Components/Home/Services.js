import React from 'react'
import tw from 'tailwind-styled-components'
import { FaTruck, FaMoneyBillWave } from 'react-icons/fa'
import { GiHotMeal, GiPayMoney } from 'react-icons/gi'
import Service from './Service'
import { useQuery } from 'react-query'
import axios from '../../axios'

function Services() {
    const fetchServices = async () => { return axios.get('/service') }
    const { isSuccess, error, data, isError } = useQuery('service', fetchServices)

    return (
        <Container>
            <h1 className="w-full py-4 md:!pb-6 text-black text-center text-4xl" >Services</h1>

            <Wrapper>
                {isSuccess &&
                    data?.data.services?.map((service) => {
                        return <Service key={service?._id} service={service} />
                    })
                }

            </Wrapper>
        </Container>
    )
}

export default Services

const Container = tw.section` pb-10 md:pt-12   `
const Wrapper = tw.div`
grid grid-cols-2 lg:!grid-cols-4 justify-between
px-[5%]
max-w-[1400px]
gap-x-[2.5%] 
gap-y-[5%]
mx-auto
py-6
`