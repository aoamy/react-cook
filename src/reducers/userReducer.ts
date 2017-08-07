// ------------------------------------------------------------------------------
//
// userReducer
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/18
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import { LOGIN, LOGOUT } from "../actions/types";
import { UserAction } from "../actions/userAction";
import { UserState } from "../store/UserState";

const InitUserState:UserState = {
	username: '',
	country: '',
	header: '',
	isLogin: false
};

function userReducer( state:UserState = InitUserState, action:UserAction )
{
	switch( action.type )
	{
		case LOGIN:
		{
			return {};
		}
		case LOGOUT:
		{
			return {};
		}
		default:
		{
			return state;
		}
	}
}

export { UserState, userReducer };
