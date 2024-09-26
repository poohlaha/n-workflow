/**
 * @fileOverview design right store
 * @date 2023-04-12
 * @author poohlaha
 */
import { observable, action } from 'mobx'
import { CONSTANT } from '@config/index'
import BaseStore from '@stores/base/base.store'

class DesignRightStore extends BaseStore {}

export default new DesignRightStore()
