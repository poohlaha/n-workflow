/**
 * @fileOverview design left toolbar
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useState } from 'react'

interface IDesignLeftToolbarProps {
  onToggle?: (flag: boolean) => void
}

const DesignLeftToolbar = (props: IDesignLeftToolbarProps): ReactElement => {
  const [toggle, setToggle] = useState(false)

  const getToolbarBottomNode = () => {
    return (
      <div className="toolbar-bottom flex-center flex-direction-column">
        <div className="w100 flex-center">
          <div className="svg-box delete-svg-box flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon delete-svg"
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M5 5v9.143c0 .473.384.857.857.857h6.286a.857.857 0 0 0 .857-.857V5h2v10c0 1.151-.768 2-2 2H5c-1.232 0-2-.849-2-2V5h2zm2-3.5v-.071C7 1.192 7.192 1 7.429 1h3.142c.237 0 .429.192.429.429V1.5a.5.5 0 0 0 .5.5H15a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h3.5a.5.5 0 0 0 .5-.5z"
              ></path>
              <path d="M7 6h1v7H7zM10 6h1v7h-1z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        <div className="toolbar-line"></div>

        <div
          className="w100 flex-center"
          onClick={() => {
            let flag = !toggle
            setToggle(flag)
            props.onToggle?.(flag)
          }}
        >
          <div className={`svg-box toggle-svg-box flex-center ${toggle ? 'toggle' : ''}`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg-icon toggle-svg">
              <path
                fill="currentColor"
                d="m13.058 6.472 5.637 5.636-5.944 5.943-.835.84a1 1 0 1 0 1.419 1.409l.663-.667 6.818-6.818a1 1 0 0 0 0-1.414l-6.472-6.473-1.012-1.013a1 1 0 0 0-1.416 1.41l1.142 1.147Z"
              ></path>
              <path
                fill="currentColor"
                d="m4.15 6.472 5.637 5.636-5.943 5.943-.836.84A1 1 0 1 0 4.427 20.3l.663-.667 6.818-6.818a1 1 0 0 0 0-1.414L5.436 4.928 4.424 3.915a1 1 0 0 0-1.415 1.41L4.15 6.472Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  const render = () => {
    return (
      <div className="design-left-toolbar h100 flex-direction-column">
        <div className="toolbar-top"></div>
        <div className="toolbar-center flex-1"></div>
        {getToolbarBottomNode()}
      </div>
    )
  }

  return render()
}

export default DesignLeftToolbar
