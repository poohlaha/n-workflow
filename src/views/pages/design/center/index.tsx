/**
 * @fileOverview design center
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'

const DesignCenter = (): ReactElement => {
  const render = () => {
    return (
      <div className="design-center flex-1 overflow-auto">
        <div className="zoom-area" style={{ transform: 'scale(1)' }}>
          <div className="canvas"></div>
        </div>
      </div>
    )
  }

  return render()
}

export default observer(DesignCenter)
