// ------------------------------------------------------------------------------
//
// store
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/18
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducers from "../reducers/reducers";

const win:any = window;
const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const history = createBrowserHistory();
const historyMiddle = routerMiddleware( history );

const store = createStore(
	combineReducers( {
		...reducers,
		router: routerReducer
	} ),
	composeEnhancers(
		applyMiddleware( historyMiddle, logger )
	)
);

export default store;
export { history };
