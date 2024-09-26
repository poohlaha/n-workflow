/**
 * @fileOverview Design
 * @date 2023-04-12
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import DesignNavigation from '@views/pages/design/navigation'
import { useStore } from '@stores/index'

const Design: React.FC<IRouterProps> = (props: IRouterProps): ReactElement => {
  const render = () => {
    return (
      <div className="design-page flex-direction-column wh100">
        <DesignNavigation />
      </div>
    )
  }

  return render()
}

export default observer(Design)
