import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { httpPost } from "./lib/api.js";
import thunkMiddleware from 'redux-thunk'

const queryLimit = 30
const initState = {
  goldType: "frontend",
  goldShowType: "heat",
  goldList: [],
  goldListFilled: false,
  goldOffset: 0,
  otherSource: "GitHub",
  otherCategory: "trending",
  otherPeriod: "day",
  otherLang: "javascript",
  otherList: [],
  otherOffset: 0,
}

export const actionTypes = {
  LOADGOLDLIST: 'LOADGOLDLIST',
  UPDATEGOLDLIST: 'UPDATEGOLDLIST',
  LOADOTHERLIST: 'LOADOTHERLIST',
  UPDATEOTHERLIST: 'UPDATEOTHERLIST',
}

// REDUCERS
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOADGOLDLIST:
      return {
        ...state,
        goldList: state.goldList.concat(action.newList),
        goldOffset: state.goldOffset + action.newList.length,
        goldListFilled: action.filled
      }
    case actionTypes.UPDATEGOLDLIST:
        return {
          ...state,
          goldType: action.newType ? action.newType : state.goldType,
          goldShowType: action.newShowType ? action.newShowType : state.goldShowType,
          goldList: action.newList,
          goldOffset: queryLimit,
          goldListFilled: false
        }
    case actionTypes.LOADOTHERLIST:
        return {
          ...state,
          otherList: state.otherList.concat(action.newList),
          otherOffset: state.otherOffset + queryLimit
        }
    case actionTypes.UPDATEOTHERLIST:
        return {
          ...state,
          otherCategory: action.newCategory ? action.newCategory : state.otherCategory,
          otherPeriod: action.newPeriod ? action.newPeriod : state.otherPeriod,
          otherLang: action.newLang ? action.newLang : state.otherLang,
          otherList: action.newList,
          otherOffset: queryLimit
        }
    default:
      return state
  }
}

// ACTIONS
// 初始数据获取
export const init2List = () => dispatch => {
  const res1 = httpPost('/resources/gold', {
    category: initState.goldType,
    order: initState.goldShowType,
    offset: initState.goldOffset,
    limit: queryLimit
  }).then(res=>{
    dispatch({ type: actionTypes.LOADGOLDLIST, newList: res.data, filled: initState.goldListFilled })
  })
  const res2 = httpPost('/resources/github', {
    category: initState.otherCategory,
    period: initState.otherPeriod,
    lang: initState.otherLang,
    offset: initState.otherOffset,
    limit: queryLimit
  }).then(res=>{
    dispatch({ type: actionTypes.LOADOTHERLIST, newList: res.data })
  })
  return Promise.all([res1, res2]).then(()=>{})
}

// 左侧向下滚动加载更多
export const loadMoreGoldList = ({goldType, goldShowType, goldOffset}) => dispatch => {
  return httpPost('/resources/gold', {
    category: goldType,
    order: goldShowType,
    offset: goldOffset,
    limit: queryLimit
  }).then(res=>{
    dispatch({ type: actionTypes.LOADGOLDLIST, newList: res.data, filled: res.data.length<queryLimit })
  })
}

// 左侧更改条件后重新加载列表
export const reSearchGoldList = ({goldType, goldShowType}) => dispatch => {
  return httpPost('/resources/gold', {
    category: goldType,
    order: goldShowType,
    offset: 0,
    limit: queryLimit
  }).then(res=>{
    dispatch({ type: actionTypes.UPDATEGOLDLIST, newList: res.data, newType: goldType, newShowType: goldShowType })
  })
}

export function initializeStore(initialState = initState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
