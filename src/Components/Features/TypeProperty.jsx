import React from 'react'
import closeIcon from '../../Assets/Images/icons/close.svg'
import { typePropMock } from '../../_mocks/mocks'
import { useDispatch } from 'react-redux'
import { setTypeProperty } from '../../redux/slices/type-property'
import { setOpenModal } from '../../redux/slices/modalHandle'

const TypeProperty = () => {
    const dispatch = useDispatch()
    const handleChangeProperty = typeProperty => {
        dispatch(setTypeProperty(typeProperty))
        dispatch(setOpenModal({ open: false }))
    }

    return (
        <>
            <div className="type-property">
                <div className="header">
                    <img src={closeIcon} alt="" onClick={() => dispatch(setOpenModal({ open: false }))} />
                    <p>Type of Property</p>
                </div>
                <hr />

                <div className="list-type">
                    {typePropMock.map((value, i) => (
                        <button key={i} id={i} onClick={() => handleChangeProperty(value)}>{value.type}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TypeProperty
