import React from 'react'
import { navigation } from '../_mocks/mocks'
import { Link } from 'react-router-dom'

const styles = {
  wrappBottomNav: {
    paddingTop: '25px',
    background: '#F8F8F8'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-evenly',
    boxShadow: '0px -4px 16px #0000000F',
    padding: '10px 0',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  },
  wrapper: {
    textAlign: 'center'
  },
  icons: {
    background: '#79828B',
    border: '1px solid #79828B',
    borderRadius: '20px',
    width: '25px',
    padding: '5px',
    margin: '0 auto'
  },
  img: {
    verticalAlign: 'middle'
  },
  span: {
    color: '#79828B',
    fontSize: '11px'
  },
  link: {
    textDecoration: 'none'
  }
}

const BottomNav = () => {
  return (
        <>
        <div style={styles.wrappBottomNav}>
            <div style={styles.nav}>
                {navigation.map(nav => (
                    <Link style={styles.link} to={nav.link} key={nav.icons}>
                        <div style={styles.wrapper}>
                            <div style={styles.icons}>
                                <img style={styles.img} src={nav.icons} alt="" />
                            </div>
                            <span style={styles.span}>{nav.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
  )
}

export default BottomNav
