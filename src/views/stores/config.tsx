/**
 * @fileOverview store
 * @date 2023-04-12
 * @author poohlaha
 */
import commonStore from './base/common.store'
import designStore from './design/design.store'
import designLeftStore from './design/design.left.store'
import designCenterStore from './design/design.center.store'
import designRightStore from './design/design.right.store'

export function createStore() {
  return {
    commonStore,
    designStore,
    designLeftStore,
    designCenterStore,
    designRightStore,
  }
}

export const store = createStore()
export type Stores = ReturnType<typeof createStore>
