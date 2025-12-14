import { animated, useSpringRef, useTransition } from '@react-spring/web'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { useLocation } from 'react-router'
import Auth from '../screens/Auth'
import ContentCreator from '../screens/ContentCreator'
import CreateCampaign from '../screens/CreateCampaign'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Reviews from '../screens/Reviews/ReviewsController'
import Signup from '../screens/Signup'
import TestCrud from '../screens/TestCrud'
import WidgetScreen from '../screens/WidgetScreen'

const animatedRoutesStyles = () => {
  return {
    routesContainer: {
      position: 'relative' as 'relative',
      overflow: 'auto',
      minHeight: '94vh'
    },
    routesWrapper: {
      position: 'absolute' as 'absolute',
      inset: 0,
      width: '100%',
      willChange: 'transform, opacity'
    }
  }
}

const AnimatedRoutes: React.FC = () => {
  const location = useLocation()
  const transRef = useSpringRef()
  const styles = animatedRoutesStyles()
  

  const transitions = useTransition(location, {
    ref: transRef,
    keys: location.pathname,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'},
  })

  useEffect(() => {
    transRef.start()
  }, [location, transRef])


  return (<div className='routesContainer' style={styles.routesContainer}>
      {transitions((style: any, item: any) => (
          <animated.div
            style={{...style, ...styles.routesWrapper}} 
            className={'route-wrapper'}
          >
            <Routes location={item}>
              <Route path='/' element={<Home />}/>
              <Route path='/auth' element={<Auth />}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/widgets" element={<WidgetScreen />}/>
              <Route path='/contentCreator' element={<ContentCreator />}/>
              <Route path='/testCrud' element={<TestCrud/>}/>
              <Route path='/create/campaign' element={<CreateCampaign />}/>
              <Route path='/reviews' element={<Reviews />}>
                <Route path='game-cards' element={<div style={{width:'100%', height: '100%'}}>Game-cards</div>} />
                <Route path='scatter-plot' element={<div style={{width:'100%', height: '100%'}}>Scatter-plot</div>} />
              </Route>
            </Routes>
          </animated.div>
        )
      )}
  </div>
  )
}

export default AnimatedRoutes