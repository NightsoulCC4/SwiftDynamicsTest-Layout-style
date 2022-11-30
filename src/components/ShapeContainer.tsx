import React from 'react'
import { Row } from 'antd';
import "../stylesheets/ShapeContainer.scss"

export default function ShapeContainer({ changePos, firstShapeElements, secondShapeElements }: any) {
    return (<>{changePos ? (<div className="shape-container" >
        <Row className="row" style={{ display: 'flex', justifyContent: 'center' }}>{secondShapeElements}</Row>
        <Row className="row" style={{ display: 'flex', justifyContent: 'end' }}>{firstShapeElements}</Row>
    </div>) : (<div className="shape-container" >
        <Row style={{ display: 'flex', justifyContent: 'end' }} className="row">{firstShapeElements}</Row>
        <Row style={{ display: 'flex', justifyContent: 'center' }} className="row">{secondShapeElements}</Row>
    </div>)}</>)
}
