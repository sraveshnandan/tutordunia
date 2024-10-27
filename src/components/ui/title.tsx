import React, { FC } from 'react'

const Title: FC<{ title: string }> = ({ title }) => {
    return (
        <span className={`text-center text-xl font-semibold text-text`}>{title}</span>
    )
}

export default Title 