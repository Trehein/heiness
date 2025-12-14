import { animated, AnimatedProps, useSpringRef, useTransition } from '@react-spring/web'
import React, { CSSProperties, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'

const reviewsStyles = () => {
  return {
    container: {
        cursor: 'pointer',
        position: 'absolute' as 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 800,
        fontSize: '25em',
        textShadow: '0px 2px 40px #00000020, 0px 2px 5px #00000030',
        webkitUserSelect: 'none',
        userSelect: 'none'
    }
  }
}

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

const Reviews: React.FC = () => {

  const [index, set] = useState(0)
  const styles = reviewsStyles()
  const onClick = () => {
  
    set(state => (state + 1) % 3)
  }
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div>
      <nav>
        <Link to='/reviews/scatter-plot'>Scatter Plot</Link>
        <Link to='/reviews/game-cards'>Game Cards</Link>
      </nav>
      <Outlet />
    </div>
    // <div className={`flex fill ${styles.container}`} onClick={onClick}>
    //   {transitions((style, i) => {
    //     const Page = pages[i]
    //     return <Page style={style} />
    //   })}
    // </div>
  )
}

export default Reviews