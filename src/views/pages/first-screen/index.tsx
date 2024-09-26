/**
 * @fileOverview 资源未加载完成前的首屏加载
 * @date 2023-04-21
 * @author poohlaha
 */
import React from 'react'
import Loading from '@views/components/loading'

const FirstScreen = () => {
  return (
    <div className="first-screen">
      <Loading show={true} />
    </div>
  )
}

export default FirstScreen
