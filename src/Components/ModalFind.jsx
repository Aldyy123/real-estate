import React from 'react'
import SearchProperty from './Features/SearchProperty'
import TypeProperty from './Features/TypeProperty'
import StatusProperty from './Features/StatusProperty'
import FindEstate from './FindEstate'


const ModalFind = ({ open, type, fullPopUp }) => {
  
  const styles = {
    popUpFull: {
      height: '130%',
      background: '#FFFFFF',
      position: 'fixed',
      width: '340px',
      zIndex: 2,
      top: '10px'
    },
    halfPopUp: {
      borderRadius: '10px',
      height: '400px',
      background: '#FFFFFF',
      position: 'fixed',
      width: '340px',
      zIndex: 2,
      [fullPopUp ? 'top' : 'bottom']: '0'
    },
    modal: {
      backgroundColor: 'rgb(228, 228, 228, 0.5)',
      height: '130%',
      width: '340px',
      position: 'absolute',
      zIndex: 3,
      top: 0
    }
  }
  return (
    <>
      {open && <section style={styles.modal}>
        {type === 1 && <section style={styles.popUpFull}>
          <SearchProperty></SearchProperty>
        </section>}

        {type === 2 && <section style={fullPopUp ?styles.popUpFull : styles.halfPopUp}>
          <TypeProperty></TypeProperty>
        </section>}

        {type === 3 && <section style={fullPopUp ?styles.popUpFull : styles.halfPopUp}>
          <StatusProperty></StatusProperty>
        </section>}

        {type === 4 && <section style={styles.halfPopUp}>
          <FindEstate></FindEstate>
        </section>}

      </section>}
    </>
  )
}

export default ModalFind
