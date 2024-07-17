import { useDispatch, useSelector } from 'react-redux';
import {getSquares} from "../model/selectors/getSquares/getSquares.ts";
import {squaresActions} from "../model/slice/squareSlice.ts";
import {useEffect, useRef, useState} from "react";
import './style.css'
import {getCountRows} from "../../../helpers/getCountRows.ts";
import {motion, AnimatePresence} from "framer-motion";

const squareVariants = {
    initial: {
        width: "0"
    },
    animate: {
        width: "20vw"
    },
    exit: {
        x: "calc(100vw)"
    }
}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

export const Squares = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch();
    const squaresList = useSelector(getSquares);
    const countRows = getCountRows(squaresList.items.length)
    const rowsArray = [...Array(countRows)].map((_, i) => i)

    useEffect(() => {
        if (squaresList.anim === "add" && squaresList.items.length) {
            const elemStyle = containerRef.current?.style

            if (elemStyle) {
                // elemStyle.transform = `translateX(${-20 + itemCount * 20}vw)`
            }

        }
    }, [squaresList, containerRef.current]);


    const addSquare = () => {
        dispatch(squaresActions.add());
    };

    const deleteSquare = () => {
        dispatch(squaresActions.delete());
    };

    const squaresListIsEmpty = squaresList.items.length === 0

    return (
        <>
            <div className='buttons'>
                <button className='button button_add' onClick={addSquare}>
                    add
                </button>

                <button className='button button_delete' onClick={deleteSquare}>
                    delete
                </button>
            </div>

            <div className='squares_wrap'>
                {squaresListIsEmpty && <div className='squares squares_empty'>
                    Добавьте квадрат
                </div> }

                {rowsArray.map(i => {
                    return <div key={'squares__row_' + i} className={'squares__row squares__row_' + i}>
                        <AnimatePresence >
                            {!squaresListIsEmpty && squaresList.items.map((item, index) => {
                                return <motion.div
                                    key={'squares__row_' + i + item.color}
                                    initial={'initial'}
                                    animate={'animate'}
                                    exit={'exit'}
                                    variants={squareVariants}
                                    transition={{ ease: "easeOut", duration: 0.3 }}
                                    className='square square_show'
                                    style={{backgroundColor: item.color}}
                                />
                            })}
                        </AnimatePresence>
                    </div>
                })}
            </div>
        </>
    );
};
