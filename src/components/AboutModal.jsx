import React, { useContext } from 'react'
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Anchor
} from 'react95'
import { StoreContext } from '../store'

const AboutModal = () => {
  const [state, dispatch] = useContext(StoreContext)
  const _handleClose = () => {
    dispatch({ type: 'SET_ABOUT_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true });
  }

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
  }

  return (
    <Window
      onClick={_handleClick}
      style={{
        width: 300,
        maxWidth: '94%',
        maxHeight: '100%',
        zIndex: state.activeModal === 'about' ? 2 : 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: state.aboutModal ? 'block' : 'none',
      }}
    >
      <WindowHeader className='flex items-center justify-between'>
        <span>About</span>
        <Button
          style={{ marginRight: '-6px', marginTop: '1px' }}
          size={'sm'}
          square
          onClick={_handleClose}
        >
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }} >
            x
          </span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p className="h1">Pokedex Vintage</p>
        <p className="mt2">Proyecto libre, hecho exclusivamente para aprendizaje. :)</p>
        <p className="mt2">
          {'Construido con '}{' '}
          <Anchor href="https://reactjs.org/" target="_blank">
            React
          </Anchor>
          {`, y con la  `}{' '}
          <Anchor href="https://pokeapi.co/" target="_blank">
            PokeAPI
          </Anchor>
          .
        </p>
      </WindowContent>

    </Window>
  )
}

export default AboutModal