/**
 * @fileOverview Design
 * @date 2023-04-12
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import DesignNavigation from '@views/pages/design/navigation'
import { useStore } from '@stores/index'
import DesignLeft from '@pages/design/left'
import DesignCenter from '@pages/design/center'
import DesignRight from '@pages/design/right'

const Design: React.FC<IRouterProps> = (props: IRouterProps): ReactElement => {
  const render = () => {
    return (
      <div className="design-page flex-direction-column wh100">
        <DesignNavigation />

        <div className="design-content flex flex-1">
          <DesignLeft />

          <DesignCenter />

          <DesignRight />
        </div>
      </div>
    )
  }

  return render()
}

export default observer(Design)
