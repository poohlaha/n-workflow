/**
 * @fileOverview design store
 * @date 2023-04-12
 * @author poohlaha
 */
import { observable, action } from 'mobx'
import { WebDeviceConfig } from '@views/config/index'
import BaseStore from '@stores/base/base.store'

class DesignStore extends BaseStore {
  // WEB 设备列表
  readonly WEB_DEVICE_LIST: { [K: string]: { [T: string]: any } } = WebDeviceConfig

  // Web device info
  readonly WEB_DEVICE = this.WEB_DEVICE_LIST.WEB.BACKSTAGE

  // 默认第一个为 device
  @observable selectDevice = this.WEB_DEVICE.W_1920
}

export default new DesignStore()
