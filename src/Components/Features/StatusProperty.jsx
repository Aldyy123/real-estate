import React from 'react'
import closeIcon from '../../Assets/Images/icons/close.svg'
import { statusPropMock } from '../../_mocks/mocks'
import {useDispatch} from 'react-redux'
import {setstatusProperty} from '../../redux/slices/status-property'
import {setOpenModal} from '../../redux/slices/modalHandle'

const StatusProperty = () => {
    const dispatch = useDispatch()
    const handleStatusProperty = typeProperty => {
        dispatch(setstatusProperty(typeProperty))
        dispatch(setOpenModal({ open: false }))
    }
  return (
        <>
            <div className="status-property">
                <div className="header">
                    <img src={closeIcon} alt="" onClick={() => dispatch(setOpenModal({ open: false }))} />
                    <p>Status</p>
                </div>
                <hr />

                <div className="list-type">
                    {statusPropMock.map((value, i) => (
                        <button key={i} id={i} onClick={() => handleStatusProperty(value)}>{value.title}</button>
                    ))}
                </div>
            </div>
        </>
  )
}

export default StatusProperty
