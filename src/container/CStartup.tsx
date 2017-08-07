// ------------------------------------------------------------------------------
//
// Startup 的容器组件
// class: CStartup
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/18
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import * as React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Action } from "redux";
import Startup from "../pages/Startup";
import { withRouter } from "react-router";
import { art } from "../app";

// 启动页完毕后跳转目标
const StartupPage:string = art( "/login" );

interface IStateProps
{
	page?:string;
}

interface IDispatchProps
{
	startup:() => void;
}

// ------------------------------------------------------------------------

function mapStateToProps( state:any ):IStateProps
{
	return Object.assign( {}, StartupPage );
}

function mapDispatchToProps( dispatch:( action:Action ) => void ):IDispatchProps
{
	return {
		startup: () => dispatch( push( { pathname: StartupPage } ) )
		// startup: () => setTimeout( dispatch( push( { pathname: StartupPage } ) ), 3000 )
	};
}

export type TStartup = IStateProps & IDispatchProps;
export default connect( mapStateToProps, mapDispatchToProps )( withRouter( Startup ) ) ;
