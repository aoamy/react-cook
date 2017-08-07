// ------------------------------------------------------------------------------
//
// React 基础组件测试
// class: Greeter
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/6/21
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import * as React from "react";
import { TStartup } from "../container/CStartup";
import { RouteComponentProps } from "react-router";

export default class Startup extends React.Component<TStartup & RouteComponentProps<any>, any>
{
	public componentDidMount()
	{
		const { startup } = this.props;
		// startup();
		setTimeout( () =>
		{
			startup();
			// window.location.href = '/login';
		}, 2000 );
	}

	public render()
	{
		const { match, location, history } = this.props;
		console.log( match );
		console.log( location );
		console.log( history );

		return (
			<div className="startup">
				{/*<img src={require( "../img/chat.png" )} alt=""/>*/}
			</div>
		);
	}
}
