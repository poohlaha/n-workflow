/**
 * @fileOverview design center store
 * @date 2023-04-12
 * @author poohlaha
 */
import { observable, action } from 'mobx'
import { CONSTANT } from '@config/index'
import BaseStore from '@stores/base/base.store'

class DesignCenterStore extends BaseStore {}

export default new DesignCenterStore()
