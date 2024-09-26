/**
 * @fileOverview 导航栏
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import Utils from '@utils/utils'

interface INavigationProps {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
  title?: string
}

const Navigation = (props: INavigationProps): ReactElement => {
  const render = () => {
    return (
      <div className="navigation wh100 flex">
        <div className="navigation-left flex">
          {!Utils.isBlank(props.title || '') && <p className="title font-bold flex-center">{props.title || ''}</p>}
          {props.left}
        </div>
        <div className="navigation-center flex flex-1">{props.center}</div>
        <div className="navigation-right flex">{props.right}</div>
      </div>
    )
  }

  return render()
}

export default observer(Navigation)
