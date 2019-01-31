import { createSelector } from 'reselect'
import { List } from 'immutable'
import { orderSelector, typeSelector, nameSelector } from 'selectors/basic'
import { currentUserSelector } from 'selectors/current'

export const orderHistorySelector = createSelector(
  [orderSelector, nameSelector, typeSelector, currentUserSelector],
  (orders, name, isAll, user) => {
    if (!orders.get(name)) return List()
    return orders
      .get(name)
      .filter(order => isAll || order.get('user') === user)
      .valueSeq()
      .sort((a, b) => {
        if (a.block_time > b.block_time) return -1
        if (a.block_time < b.block_time) return 1
        return 0
      })
  },
)
