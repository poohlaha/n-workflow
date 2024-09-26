/**
 * @fileOverview store
 * @date 2023-04-12
 * @author poohlaha
 */
import commonStore from './base/common.store'
import designStore from './design/design.store'

export function createStore() {
  return {
    commonStore,
    designStore,
  }
}

export const store = createStore()
export type Stores = ReturnType<typeof createStore>
