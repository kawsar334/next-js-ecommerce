import Loader from '@/components/loader/Loader'
import React from 'react'

const loading = () => {

    const styleElement = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        gap: "5px"

    }
    return (
        <div style={styleElement}>
            <Loader />
            <p>Loading please wait...</p>

        </div>
    )
}

export default loading