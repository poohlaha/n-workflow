/**
 * @fileOverview Design
 * @date 2023-04-12
 * @author poohlaha
 */
import React, { ReactElement, useState } from 'react'
import { observer } from 'mobx-react-lite'
import DesignNavigation from '@views/pages/design/navigation'
import { useStore } from '@stores/index'
import DesignLeft from '@pages/design/left'
import DesignCenter from '@pages/design/center'
import DesignRight from '@pages/design/right'
import Loading from '@views/components/loading'
import DesignPageSetting from '@pages/design/popup/page-setting'

const Design: React.FC<IRouterProps> = (props: IRouterProps): ReactElement => {
  const [showPageSettingPopup, setShowPageSettingPopup] = useState(false)

  const { designStore } = useStore()

  const render = () => {
    return (
      <div className="design-page flex-direction-column wh100">
        <DesignNavigation
          onPageSetting={() => {
            setShowPageSettingPopup(!showPageSettingPopup)
          }}
        />

        <div className="design-content flex flex-1">
          <DesignLeft />

          <DesignCenter />

          <DesignRight />
        </div>

        {/* 弹出层 */}
        <DesignPageSetting show={showPageSettingPopup} onClose={() => setShowPageSettingPopup(false)} />

        {/* loading */}
        <Loading show={designStore.loading} />
      </div>
    )
  }

  return render()
}

export default observer(Design)
