import React from 'react'

const Loader = () => {
    return (
        <div className='w-full z-50 min-h-[100vh] absolute bg-transparent/20 backdrop-blur-sm top-0 left-0 flex items-center justify-center'>
            <div className='loader'></div>
        </div>
    )
}

export default Loader