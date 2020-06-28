import React, { createRef, useEffect, useRef, useState } from "react";
import '../../static/style/carousel.scss'

const makeCurrentTransform = (transArr, maxLeftDistance, width, flag=false) => {
    const currentCache = []
    if(!flag){
        transArr.forEach(item => {
            let currentWidth = item - width;
            if (currentWidth < maxLeftDistance) {
                currentWidth = width
            }
            currentCache.push(currentWidth)
        })
    }else{
        transArr.forEach(item => {
            let currentWidth = item + width;
            if (currentWidth > -maxLeftDistance) {
                currentWidth = -width
            }
            currentCache.push(currentWidth)
        })
    }

    return currentCache
}

const Carousel = ({ imgArr, duringTime,style }) => {
    const [transArr, setTransArr] = useState(new Array(imgArr.length).fill(0))
    const [width, setWidth] = useState(0)
    const [inv, setInv] = useState(null)
    const [flag, setFlag] = useState(false)
    const containerRef = useRef()
    const transRef = useRef()
    const flagRef = useRef()

    flagRef.current = flag
    transRef.current = transArr

    useEffect(() => {
        const width = containerRef.current.clientWidth;
        let initialArr = transArr.map((item, i) => {
            if(i !== imgArr.length - 1){
                return item + i * width
            }else{
                return -width
            }
        })

        setWidth(width)
        setTransArr(arr => initialArr)
        // 最长左边距
        const maxLeftDistance = -(width * (imgArr.length - 2))

        const inv = setInterval(() => {
            const currentCache = makeCurrentTransform(transRef.current, maxLeftDistance, width, flagRef.current)
            setTransArr(arr => currentCache)
            setFlag(false)
        }, duringTime ? duringTime : 5000)

        setInv(inv)

        return () => clearInterval(inv)
    }, []);
    const maxLeftDistance = -(width * (imgArr.length - 2))

    const handleSlideRight = () => {
        const time = new Date();
        return function () {
            setFlag(false)
            if(new Date() - time < 600){
                return;
            }else{
                clearInterval(inv)
                const currentCache = makeCurrentTransform(transArr, maxLeftDistance, width, false)
                setTransArr(currentCache)

                const inv2 = setInterval(() => {
                    const currentCache = makeCurrentTransform(transRef.current, maxLeftDistance, width, false)
                    setTransArr(arr => currentCache)
                    setFlag(false)
                }, duringTime ? duringTime : 5000)
                setInv(inv2)
            }
        }
    }

    const handleSlideLeft = () => {
        const time = new Date();
        return function () {
            setFlag(true)
            if(new Date() - time < 600){
                return;
            }else{
                clearInterval(inv)
                const currentCache = makeCurrentTransform(transArr, maxLeftDistance, width, true)
                setTransArr(currentCache)
                const inv2 = setInterval(() => {
                    const currentCache = makeCurrentTransform(transRef.current, maxLeftDistance, width, false)
                    setTransArr(arr => currentCache)
                    setFlag(false)
                }, duringTime ? duringTime : 5000)
                setInv(inv2)
            }
        }
    }

    return (
        <div
            ref={ containerRef }
            className={ `carousel` }
            style={style}
        >
            { imgArr.map((item, i) => (
                <CarouselItem
                    flag={flag}
                    backgroundURL={ item }
                    imgURL={ item }
                    key={ i }
                    currentX={ transArr[i] }
                    width={ width }
                />
            )) }
            <StatusBar
                length={ imgArr.length }
                currentIndex={ transArr.indexOf(0) }
            />
            <button className={'carousel-button carousel-button--right'} onClick={handleSlideRight()}>&gt;</button>
            <button className={'carousel-button carousel-button--left'} onClick={handleSlideLeft()}>&lt;</button>
        </div>
    )
}

const CarouselItem = ({ imgURL, currentX, width,flag }) => {
    let isActive = false;
    if(flag){
        if([0, +width].includes(currentX)) isActive = true;
    }else{
        if([0, -width].includes(currentX)) isActive = true;
    }
    return (
        <div
            className={ `carousel__item ${ isActive ? 'carousel__item--active' : '' }` }
            style={ {
                backgroundImage: `url(${ imgURL })`,
                transform: `translateX(${ currentX }px)`
            } }
        >
        </div>
    )
}

const StatusBar = ({ length, currentIndex }) => {
    const mapArr = []
    for (let i = 0; i < length; i++) {
        i === currentIndex ? mapArr.push(true) : mapArr.push(false)
    }

    return (
        <div className={ 'status-bar' }>
            {
                mapArr.map((item, i) => (
                    <div key={i} className={`status ${ item ? 'status--active' : '' }`}></div>
                ))
            }
        </div>
    )
}

export default Carousel
