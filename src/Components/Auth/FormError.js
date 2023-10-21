import React from 'react'

function FormError(props) {
    return (
        <div className='h-5'>
            <p className="text-redfood text-xs">{props.error}</p>

        </div>
    )
}

export default FormError
