// ------------------------------------------------------------------------------
//
// userAction
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/14
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import { Action } from "redux";
import { LOGIN, LOGOUT } from "./types";

interface UserAction extends Action
{
	username:string;
	password?:string;
	country?:string;
}

function login( username:string, password:string, country:string ):UserAction
{
	return { type: LOGIN, username, password, country };
}

function logout( username:string ):UserAction
{
	return { type: LOGOUT, username };
}

export { UserAction };
