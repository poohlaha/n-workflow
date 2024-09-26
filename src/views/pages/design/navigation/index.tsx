/**
 * @fileOverview design navigation
 * @date 2023-08-28
 * @author poohlaha
 */
import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import Navigation from '@views/components/navigation'
import Tooltip from '@views/components/tooltip'
import { useStore } from '@views/stores'

interface IDesignNavigationProps {
  onPageSetting?: () => void
}

const DesignNavigation = (props: IDesignNavigationProps): ReactElement => {
  const { designStore } = useStore()

  const getLeftNode = () => {
    return (
      <div className="design-navigation-left flex-align-center">
        {/* 保存 */}
        <div className="svg-box save-svg-box flex-center">
          <svg className="svg-icon save-svg" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.42 14.24A4.53 4.53 0 0 1 16 10.1a4.53 4.53 0 0 1 4.58 4.14l.04.54.53.14a3.05 3.05 0 0 1 2.35 2.93c0 1.25-.8 2.35-1.95 2.8a.75.75 0 1 0 .55 1.4 4.5 4.5 0 0 0 2.9-4.2 4.5 4.5 0 0 0-2.99-4.23A6.05 6.05 0 0 0 16 8.6a6.05 6.05 0 0 0-6.01 5.02A4.5 4.5 0 0 0 7 17.85a4.5 4.5 0 0 0 2.9 4.2.75.75 0 1 0 .55-1.4 3 3 0 0 1-1.95-2.8c0-1.4.99-2.6 2.35-2.93l.53-.14zm8.51 4.4c.27.31.25.78-.05 1.06L15.5 23.7a.7.7 0 0 1-1-.03l-2.18-2.23a.75.75 0 0 1 0-1.05.7.7 0 0 1 1.03 0l1.7 1.73 3.84-3.54a.7.7 0 0 1 1.03.06"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        {/* 回退 */}
        <div className="svg-box undo-svg-box flex-center">
          <svg className="svg-icon undo-svg" viewBox="0 0 32 32">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M21.37 17.41a3.96 3.96 0 0 0-3.95-3.95h-5.73L13.24 15a.75.75 0 0 1-1.06 1.06l-2.83-2.83a.75.75 0 0 1 0-1.06l2.82-2.82a.75.75 0 0 1 1.06 1.06l-1.54 1.54h5.73a5.46 5.46 0 0 1-.01 10.92h-4.28a.75.75 0 1 1 0-1.5h4.28a3.96 3.96 0 0 0 3.96-3.96"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        {/* 前进 */}
        <div className="svg-box redo-svg-box flex-center">
          <svg className="svg-icon redo-svg" viewBox="0 0 32 32">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M10.63 17.41a3.96 3.96 0 0 1 3.95-3.95h5.73L18.76 15a.75.75 0 0 0 1.06 1.06l2.83-2.83c.3-.3.3-.77 0-1.06l-2.82-2.82a.75.75 0 0 0-1.06 1.06l1.54 1.54h-5.73a5.46 5.46 0 0 0 .01 10.92h4.28a.75.75 0 1 0 0-1.5h-4.28a3.96 3.96 0 0 1-3.96-3.96"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    )
  }

  const getMoreTooltipData = () => {
    const getShortcutIcon = () => {
      return (
        <div className="svg-box shortcut-svg-box flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon shortcut-svg"
            viewBox="0 0 14 14"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm.63 2.574V10h1.053V7.156h3.141v-.9H3.683V4.474h3.33v-.9H2.63zm7.551 1.647c-.279 0-.531.054-.765.171a1.859 1.859 0 0 0-.612.495v-.54H7.778V10h1.026V7.201c.036-.369.162-.657.378-.855a.94.94 0 0 1 .666-.27c.702 0 1.053.378 1.053 1.143V10h1.026V7.129c0-1.278-.585-1.908-1.746-1.908z"
            ></path>
          </svg>
        </div>
      )
    }

    const getSettingIcon = () => {
      return (
        <div className="svg-box setting-svg-box flex-center">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg-icon setting-svg">
            <path
              d="m4.328 19.734-.31-.34a10.91 10.91 0 0 1-2.386-4.146l-.135-.436L3.545 12 1.497 9.188l.135-.436a10.91 10.91 0 0 1 2.385-4.147l.311-.339 3.442.377 1.398-3.187.448-.101A10.843 10.843 0 0 1 12 1.09c.809 0 1.607.089 2.384.264l.448.1 1.398 3.188 3.442-.377.31.34a10.91 10.91 0 0 1 2.386 4.146l.135.436L20.455 12l2.048 2.812-.135.436a10.91 10.91 0 0 1-2.385 4.147l-.311.339-3.442-.377-1.398 3.187-.448.101a10.848 10.848 0 0 1-4.768 0l-.448-.1-1.398-3.188-3.442.377Zm3.485-2.21a1.488 1.488 0 0 1 1.525.881l1.12 2.554a9.05 9.05 0 0 0 3.084 0l1.12-2.554a1.488 1.488 0 0 1 1.524-.881l2.755.3c.665-.8 1.19-1.71 1.547-2.69l-1.644-2.258a1.488 1.488 0 0 1 0-1.752l1.644-2.258a9.091 9.091 0 0 0-1.547-2.69l-2.755.3a1.488 1.488 0 0 1-1.524-.881l-1.12-2.554a9.053 9.053 0 0 0-3.084 0l-1.12 2.554a1.488 1.488 0 0 1-1.525.881l-2.754-.3a9.09 9.09 0 0 0-1.548 2.69l1.645 2.258c.38.522.38 1.23 0 1.752l-1.644 2.258c.358.98.882 1.89 1.547 2.69l2.754-.3ZM12 16.545c-2.502 0-4.528-2.036-4.528-4.545 0-2.51 2.026-4.545 4.528-4.545S16.528 9.49 16.528 12 14.502 16.545 12 16.545Zm0-1.818c1.496 0 2.71-1.22 2.71-2.727A2.719 2.719 0 0 0 12 9.273 2.719 2.719 0 0 0 9.29 12 2.719 2.719 0 0 0 12 14.727Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )
    }

    return [
      {
        icon: getShortcutIcon(),
        text: '快捷键',
        underline: true,
      },
      {
        icon: getSettingIcon(),
        text: '偏好设置',
      },
    ]
  }

  const getRightNode = () => {
    return (
      <div className="design-navigation-right flex">
        <div className="right-tools flex-align-center">
          {/* 设置 */}
          <div className="svg-box setting-svg-box flex-center">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg-icon setting-svg">
              <path
                d="m4.328 19.734-.31-.34a10.91 10.91 0 0 1-2.386-4.146l-.135-.436L3.545 12 1.497 9.188l.135-.436a10.91 10.91 0 0 1 2.385-4.147l.311-.339 3.442.377 1.398-3.187.448-.101A10.843 10.843 0 0 1 12 1.09c.809 0 1.607.089 2.384.264l.448.1 1.398 3.188 3.442-.377.31.34a10.91 10.91 0 0 1 2.386 4.146l.135.436L20.455 12l2.048 2.812-.135.436a10.91 10.91 0 0 1-2.385 4.147l-.311.339-3.442-.377-1.398 3.187-.448.101a10.848 10.848 0 0 1-4.768 0l-.448-.1-1.398-3.188-3.442.377Zm3.485-2.21a1.488 1.488 0 0 1 1.525.881l1.12 2.554a9.05 9.05 0 0 0 3.084 0l1.12-2.554a1.488 1.488 0 0 1 1.524-.881l2.755.3c.665-.8 1.19-1.71 1.547-2.69l-1.644-2.258a1.488 1.488 0 0 1 0-1.752l1.644-2.258a9.091 9.091 0 0 0-1.547-2.69l-2.755.3a1.488 1.488 0 0 1-1.524-.881l-1.12-2.554a9.053 9.053 0 0 0-3.084 0l-1.12 2.554a1.488 1.488 0 0 1-1.525.881l-2.754-.3a9.09 9.09 0 0 0-1.548 2.69l1.645 2.258c.38.522.38 1.23 0 1.752l-1.644 2.258c.358.98.882 1.89 1.547 2.69l2.754-.3ZM12 16.545c-2.502 0-4.528-2.036-4.528-4.545 0-2.51 2.026-4.545 4.528-4.545S16.528 9.49 16.528 12 14.502 16.545 12 16.545Zm0-1.818c1.496 0 2.71-1.22 2.71-2.727A2.719 2.719 0 0 0 12 9.273 2.719 2.719 0 0 0 9.29 12 2.719 2.719 0 0 0 12 14.727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          {/* 运行 */}
          <div className="svg-box run-svg-box flex-center">
            <svg className="svg-icon run-svg" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M22.52 14.14a2.25 2.25 0 0 1 0 3.76l-8.28 5.46a2.25 2.25 0 0 1-3.49-1.88V10.56c0-1.8 2-2.87 3.49-1.88zm-.83 2.5a.75.75 0 0 0 0-1.24l-8.28-5.47a.75.75 0 0 0-1.16.63v10.92c0 .6.66.96 1.16.63z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/* 更多 */}
        <div className="right-more flex-align-center position-relative">
          <div className="svg-box more-svg-box flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon more-svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M8 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              ></path>
            </svg>
          </div>

          <Tooltip data={getMoreTooltipData()} />
        </div>
      </div>
    )
  }

  const getCenterNode = () => {
    return (
      <div className="design-navigation-center flex-jsc-center wh100">
        <div className="screen flex-align-center">
          <div className="screen-content flex-align-center font-bold cursor-pointer">
            <p>W</p>
            <p>{designStore.selectDevice?.width || 0}</p>
            <p>px</p>
          </div>
        </div>

        <div className="screen flex-align-center font-bold cursor-pointer">
          <div className="screen-content flex-align-center font-bold cursor-pointer">
            <p>H</p>
            <p>{designStore.selectDevice?.height || 0}</p>
            <p>px</p>
          </div>
        </div>

        <div className="page-setting flex-align-center">
          <div
            className="flex-align-center page-setting-content cursor-pointer"
            onClick={() => {
              props.onPageSetting?.()
            }}
          >
            <div className="svg-box setting-svg-box flex-center">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg-icon setting-svg">
                <path
                  d="m4.328 19.734-.31-.34a10.91 10.91 0 0 1-2.386-4.146l-.135-.436L3.545 12 1.497 9.188l.135-.436a10.91 10.91 0 0 1 2.385-4.147l.311-.339 3.442.377 1.398-3.187.448-.101A10.843 10.843 0 0 1 12 1.09c.809 0 1.607.089 2.384.264l.448.1 1.398 3.188 3.442-.377.31.34a10.91 10.91 0 0 1 2.386 4.146l.135.436L20.455 12l2.048 2.812-.135.436a10.91 10.91 0 0 1-2.385 4.147l-.311.339-3.442-.377-1.398 3.187-.448.101a10.848 10.848 0 0 1-4.768 0l-.448-.1-1.398-3.188-3.442.377Zm3.485-2.21a1.488 1.488 0 0 1 1.525.881l1.12 2.554a9.05 9.05 0 0 0 3.084 0l1.12-2.554a1.488 1.488 0 0 1 1.524-.881l2.755.3c.665-.8 1.19-1.71 1.547-2.69l-1.644-2.258a1.488 1.488 0 0 1 0-1.752l1.644-2.258a9.091 9.091 0 0 0-1.547-2.69l-2.755.3a1.488 1.488 0 0 1-1.524-.881l-1.12-2.554a9.053 9.053 0 0 0-3.084 0l-1.12 2.554a1.488 1.488 0 0 1-1.525.881l-2.754-.3a9.09 9.09 0 0 0-1.548 2.69l1.645 2.258c.38.522.38 1.23 0 1.752l-1.644 2.258c.358.98.882 1.89 1.547 2.69l2.754-.3ZM12 16.545c-2.502 0-4.528-2.036-4.528-4.545 0-2.51 2.026-4.545 4.528-4.545S16.528 9.49 16.528 12 14.502 16.545 12 16.545Zm0-1.818c1.496 0 2.71-1.22 2.71-2.727A2.719 2.719 0 0 0 12 9.273 2.719 2.719 0 0 0 9.29 12 2.719 2.719 0 0 0 12 14.727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <p className="font-bold">页面设置</p>
          </div>
        </div>
      </div>
    )
  }

  const render = () => {
    return (
      <div className="design-navigation">
        <Navigation title="未命名" left={getLeftNode()} center={getCenterNode()} right={getRightNode()} />
      </div>
    )
  }

  return render()
}

export default observer(DesignNavigation)
