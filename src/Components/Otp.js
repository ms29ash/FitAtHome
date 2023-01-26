import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import tw from 'tailwind-styled-components'
import { Container, Button, Wrapper, Head, Form, Errors } from './Form'

import Timer from './Timer'
function Otp({ onSubmit }) {
    const { loading, error } = useSelector(state => state.auth)

    const btnRef = useRef(null);
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const enter = (e, index) => {
        e.select();
        if (isNaN(e.value)) return false;
        setOtp([...otp.map((d, id) => (id === index ? e.value : d))]);
        if (e.nextSibling) {
            e.nextSibling.focus();
        } else {
            btnRef.current.focus()
        }
    };
    return (
        <Container className="signin-page ">
            <Wrapper >
                <Form onSubmit={(e) => onSubmit(e, otp)} >
                    <Head >OTP</Head>
                    <Errors>{error}</Errors>

                    <Inputs>

                        {otp.map((d, i) => {
                            return (
                                <Input
                                    key={i}
                                    value={d}
                                    onChange={(e) => enter(e.target, i)}
                                    type="number"
                                    min="0"
                                    max="9"
                                    onFocus={(e) => e.target.select()}
                                    required={true}
                                />

                            );
                        })}
                    </Inputs>
                    <Timer time={30} />
                    <Button disabled={loading} ref={btnRef} type="submit" >Next</Button>
                </Form>
            </ Wrapper>
        </Container>
    )
}

export default Otp

const Inputs = tw.div`
flex
justify-center
mt-4
w-full`
const Input = tw.input` border-redfood border-2 h-[64px] w-[64px] mx-4 text-center text-2xl font-bold selection:bg-white`
