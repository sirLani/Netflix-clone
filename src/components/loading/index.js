﻿import React from 'react'
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading'


export default function Loading({
    src, ...restProps
}){
    return (
        <Spinner {...restProps}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReaseBody(){
    return <ReleaseBody/>
}