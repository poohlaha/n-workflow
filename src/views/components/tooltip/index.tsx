/**
 * @fileOverview Tooltip
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { Fragment, ReactElement } from 'react'
import { observer } from 'mobx-react-lite'

interface ITooltipProps {
  className?: string
  data: Array<ITooltipItemProps>
}

interface ITooltipItemProps {
  icon?: React.ReactNode
  text?: string
  underline?: boolean
  desc?: string | React.ReactNode
}

const Tooltip = (props: ITooltipProps): ReactElement => {
  const render = () => {
    let data = props.data || []
    if (data.length === 0) {
      return <div className="tooltip"></div>
    }

    return (
      <div className={`tooltip ${props.className || ''}`}>
        {data.map((item: ITooltipItemProps, index: number) => {
          return (
            <div className="tooltip-item flex-direction-column" key={index}>
              <div className="flex-align-center cursor-pointer tooltip-item-content">
                {item.icon}

                <p className="tooltip-item-text">{item.text || ''}</p>
                <div className="tooltip-item-desc flex-align-center">{item.desc || ''}</div>
              </div>

              {item.underline && <div className="tooltip-item-underline"></div>}
            </div>
          )
        })}
      </div>
    )
  }

  return render()
}

export default observer(Tooltip)
