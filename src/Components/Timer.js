import React, { useEffect, useState } from 'react'
import { useIdleTimer, workerTimers } from 'react-idle-timer'
import tw from 'tailwind-styled-components'

export default function App() {
    const timeout = 1000 * 1;
    const promptTimeout = 1000 * 60;

    const [open, setOpen] = useState(false)
    const [remaining, setRemaining] = useState(0)

    const onPrompt = () => {

        setOpen(true)
        setRemaining(promptTimeout)
    }

    const onIdle = () => {
        setOpen(false)
        setRemaining(0)
    }

    const onActive = () => {
        setOpen(false)
        setRemaining(0)
    }

    const { getRemainingTime, isPrompted, activate } = useIdleTimer({
        timeout,
        promptTimeout,
        onPrompt,
        onIdle,
        onActive
    })

    const handleStillHere = () => {
        setOpen(false)
        activate()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPrompted()) {
                setRemaining(Math.ceil(getRemainingTime() / 1000))
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [getRemainingTime, isPrompted])

    return (
        <Container className='modal' >
            <Text style={{ display: open ? 'block' : 'none' }}>{remaining} seconds</Text>


            <Button style={{ display: !open ? 'block' : 'none' }} onClick={handleStillHere} className="hover:text-orangefood text-grayfood" to='/forgetpass'>Resend OTP</Button>
            <br />
        </Container>
    )
}


const Container = tw.div`flex items-center justify-center w-full my-4`
const Text = tw.p` text-sm text-center`
const Button = tw.button``