import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { useDispatch } from 'react-redux'
import { setQuantity, removeCart } from '../features/basket/basketSlice'

function CartCard({ item }) {
    const { image, name, price } = item.item;
    const dispatch = useDispatch();
    const refSelect = useRef()

    const onChangeHandler = () => {
        if (refSelect.current.value === '0') {
            dispatch(removeCart({ name: name }))
        } else {
            dispatch(setQuantity({ name: name, quantity: parseInt(refSelect.current.value) }))
        }
    }

    return (
        <Container>
            <Img src={image} alt="" />
            <Wrapper>

                <p className="text-lg font-bold">{name}</p>
                <p className=" mb-3 h-[15%]  text-redfood text-xl font-bold ">&#8377; {price}</p>
                <Select name="quantity" ref={refSelect} value={item.quantity} onChange={onChangeHandler} >
                    <option value="0">0</option>
                    {
                        Array(10).fill().map((item, index) => <option value={index + 1} key={index}  >{index + 1}</option>)
                    }

                </Select>
            </Wrapper>

        </Container>
    )
}

export default CartCard

const Container = tw.div`
w-full h-26 my-5 flex 
`
const Img = tw.img`
w-[30%] object-cover aspect-square md:aspect-[4/3]
`
const Wrapper = tw.div` ml-4`

const Select = tw.select` drop-shadow-4xl bg-gray-200 p-1 rounded-lg mt-2`