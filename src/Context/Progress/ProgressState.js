import { useState } from 'react'

import ProgressContext from './ProgressContext';


function ProgressState(props) {
    const [loadBarProgress, setLoadBar] = useState(10)
    return (
        <ProgressContext.Provider value={{ loadBarProgress, setLoadBar }} >
            {props.children}

        </ProgressContext.Provider >
    )
}





export default ProgressState;