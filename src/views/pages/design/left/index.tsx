/**
 * @fileOverview design left
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement, useState } from 'react'
import { observer } from 'mobx-react-lite'
import DesignLeftToolbar from '@pages/design/left/toolbar'

const DesignLeft = (): ReactElement => {
  const [toggle, setToggle] = useState(false)

  const render = () => {
    return (
      <div className="design-left h100 flex">
        <DesignLeftToolbar
          onToggle={flag => {
            setToggle(flag)
          }}
        />

        <div className={`left-panel h100 ${toggle ? 'toggle' : ''}`}>
          <div className="left-panel-content"></div>
        </div>
      </div>
    )
  }

  return render()
}

export default observer(DesignLeft)
