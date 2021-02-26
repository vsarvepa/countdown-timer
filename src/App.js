import './App.scss'
import dayjs from 'dayjs';
import Countdown from 'react-countdown';
import { Header } from './base/Header';
import { Clock } from './base/Clock';
import { useRef, useEffect, useState } from 'react';
import { Footer } from './base/Footer';
import styled from 'styled-components'

const StyledDiv = styled.div({
  width: '30rem',
  display: 'flex',
  margin: '6rem auto 0',
  justifyContent: 'center'
})

const Button = styled.button`
  z-index: 1;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  padding: 1rem 2rem;
  border-radius: .4rem;
  letter-spacing: 1.6px;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: var(--weight-bold);
  background-color: var(--color-pink-68);
  font-family: 'Red Hat Text', sans-serif;
  transition: var(--transition) background-color;
  box-shadow: 0 .4rem 1.4rem 0 rgba(251,94,132,0.39);

  :focus {
    outline-offset: 2px;
    outline: 2px dotted var(--color-pink-68);
  }

  :hover {
    background-color: #f17493;
  }

  :disabled {
    cursor: none;
    animation-delay: 2s;
    animation-duration: .6s;
    animation-name: fadeOut;
    background-color: #f187a1;
    animation-fill-mode: forwards;
  }
`

function App() {
  const countFromDate = dayjs()
    .add(14, 'day')
    .add(0, 'hour')
    .add(0, 'minute')
    .add(0, 'second')
    .toDate();
  
  const Completionist = () => <span>You are good to go!</span>
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return Completionist;
    return (<Clock days={days} hours={hours} minutes={minutes} seconds={seconds} />)
  }

  const [isStarted, setIsStarted] = useState(false);

  const CountdownRef = useRef();

  const handleStartClick = () => {
    CountdownRef.current.start()
    setIsStarted(true)
  }

  useEffect(() => {
    CountdownRef.current.pause()
  }, [])

  return (
    <div className="App">
      <Header />
      <Countdown ref={CountdownRef} date={countFromDate} renderer={renderer} />
      <StyledDiv>
        <Button aria-label="button to control countdown" disabled={isStarted} onClick={handleStartClick}>{isStarted ? 'countdown started' : 'start countdown'}</Button>
      </StyledDiv>
      <Footer />
    </div>
  );
}

export default App;