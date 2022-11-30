import React from 'react'
import { Button } from 'antd';
import "../stylesheets/Shapes.scss"

type shape = {
    role: any;
    randomized: any;
}

export default function Shapes(props: shape) {

    const { role, randomized } = props;

    // console.log(role)

    return (
        <Button className="button" onClick={() => { randomized() }}><div className={role} /></Button>

    )
}
