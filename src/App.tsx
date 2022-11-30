import React, { useState } from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import { Divider, Button, Row } from 'antd';
import Shapes from './components/Shapes';
import { useTranslation } from 'react-i18next'

function App() {

    const { t } = useTranslation();

    const [shapeLists, changeShapeLists] = useState<string[]>(['square', 'circle', 'oval', 'trapezoid', 'rectangle', 'parallelogram'])
    const [firstShapeLists, changeFirstShapeLists] = useState<string[]>(['square', 'circle', 'oval'])
    const [secondShapeLists, changeSecondShapeLists] = useState<string[]>(['trapezoid', 'rectangle', 'parallelogram'])
    const [changePos, setChangePOS] = useState<boolean>(false)

    let firstShapeElements: any;
    let secondShapeElements: any;

    function moveBackward() {
        let keyholder: any = shapeLists.shift();
        shapeLists.push(keyholder);
        changedShape();
    }

    function moveForward() {
        let keyholder: any = shapeLists.pop();
        shapeLists.unshift(keyholder);
        changedShape();
    }

    function randomized() {
        let currentIndex = shapeLists.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shapeLists[currentIndex], shapeLists[randomIndex]] = [shapeLists[randomIndex], shapeLists[currentIndex]];
        }
        changedShape();
    }

    function changedShape() {
        changeShapeLists(shapeLists);
        changeFirstShapeLists(shapeLists.slice(0, shapeLists.length / 2))
        changeSecondShapeLists(shapeLists.slice(shapeLists.length / 2, shapeLists.length))
    }

    if (!(firstShapeLists.length === 0))
        firstShapeElements = firstShapeLists.map((items, index) => {
            return <Shapes role={items} key={index} randomized={randomized} />

        })
    if (!(secondShapeLists.length === 0))
        secondShapeElements = secondShapeLists.map((items, index) => {
            return <Shapes role={items} key={index} randomized={randomized} />
        })

    return (
        <div className="App">
            <header className="App-header">
                <Topbar />
                <div className="body">
                    <div className="container">
                        <Button className="button button-side" onClick={() => { moveBackward() }}><div className="triangle-left" /><div className="name-button"><p>{t('button-side')}</p></div></Button>
                        <Button className="button button-middle" onClick={() => { setChangePOS(!changePos) }}><div className="triangle-up-down triangle-up" /><div className="triangle-up-down triangle-down" /><div className="name-button"><p>{t('button-middle')}</p></div></Button>
                        <Button className="button button-side" onClick={() => { moveForward() }}><div className="triangle-right" /><div className="name-button"><p>{t('button-side')}</p></div></Button>
                    </div>
                    <Divider orientationMargin={50} />
                    <div className="shape-container" >{changePos ? (<><Row className="row" style={{ display: 'flex', justifyContent: 'center' }}>{secondShapeElements}</Row>
                        <Row className="row" style={{ display: 'flex', justifyContent: 'end' }}>{firstShapeElements}</Row></>
                    ) : (<><Row style={{ display: 'flex', justifyContent: 'end' }} className="row">{firstShapeElements}</Row>
                        <Row style={{ display: 'flex', justifyContent: 'center' }} className="row">{secondShapeElements}</Row></>
                    )}</div>
                </div>
            </header>
        </div>
    );
}

export default App;
