/**
 * @fileOverview design page setting
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@views/stores'
import StyleSelect from '@views/components/style'
import { Input } from 'antd'

interface IDesignPageSettingProps {
  show: boolean
  onClose: () => void
}

const DesignPageSetting = (props: IDesignPageSettingProps): ReactElement => {
  const { designStore, commonStore } = useStore()

  const render = () => {
    return (
      <div className={`popup popup-design-page-setting flex-direction-column h100 ${props.show ? 'show' : ''}`}>
        <div className="popup-header">
          <ul>
            <li className="active">
              <span className="text">页面设置</span>
              <span className="underline"></span>
            </li>
          </ul>

          <span className="close-icon">
            <div className="svg-box flex-center" onClick={() => props.onClose?.()}>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 9.576l6.06-6.061a1.714 1.714 0 1 1 2.425 2.424L14.425 12l6.06 6.06a1.714 1.714 0 1 1-2.424 2.425L12 14.425l-6.06 6.06a1.714 1.714 0 1 1-2.425-2.424L9.575 12l-6.06-6.06a1.714 1.714 0 1 1 2.424-2.425L12 9.575z"
                ></path>
              </svg>
            </div>
          </span>
        </div>

        <div className="popup-content flex-1 w100">
          {/* 页面尺寸 */}
          <div className="popup-content-section flex-direction-column page-size flex-direction-column">
            <header>尺寸</header>
            <div className="text-info font-bold popup-padding-right">
              <button className="flex-align-center">
                <span className="cursor-pointer text">{designStore.selectDevice?.text || ''}</span>
                <svg className="arrow-icon svg-icon" viewBox="0 0 26 26">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.65 11.15c.2-.2.5-.2.7 0L13 13.79l2.65-2.64a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 0-.7Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="size flex-align-center popup-margin-top popup-padding-right">
              <div className="screen flex-align-center">
                <span className="title">W</span>
                <input
                  className="wh100"
                  value={designStore.selectDevice?.width || 0}
                  readOnly={designStore.selectDevice.name !== 'custom'}
                ></input>
              </div>

              <div className="screen flex-align-center popup-margin-left">
                <span className="title">W</span>
                <input
                  className="wh100"
                  value={designStore.selectDevice?.height || 0}
                  readOnly={designStore.selectDevice.name !== 'custom'}
                ></input>
              </div>
            </div>
          </div>

          {/* 页面样式 */}
          <div className="popup-content-section flex-direction-column page-style flex-direction-column">
            <header>样式</header>

            <div className="section-body popup-padding popup-margin-bottom">
              <div className="no-select popup-margin-bottom color-panel-title">页面样式</div>
              <StyleSelect dropdownClassName={commonStore.skin} />
            </div>

            <div className="section-body popup-padding popup-margin-top">
              <div className="no-select popup-margin-bottom color-panel-title">自定义样式</div>
              <Input.TextArea rows={4} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return render()
}

export default observer(DesignPageSetting)
