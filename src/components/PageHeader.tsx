// ------------------------------------------------------------------------------
//
// 页面头部
// class: PageHeader
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/20
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";

export default class PageHeader extends React.Component<any, any>
{
	// public pageNme:string;
	// --------------------------------------------------------------------------
	//
	// Class constructor
	//
	// --------------------------------------------------------------------------

	public constructor()
	{
		super();
	}

	// --------------------------------------------------------------------------
	//
	// Class properties
	//
	// --------------------------------------------------------------------------

	// --------------------------------------------------------------------------
	//
	// Class methods
	//
	// --------------------------------------------------------------------------

	// --------------------------------------------------------------------------
	//
	// Event handlers
	//
	// -------------------------------------------------------------------------
	public render()
	{
		return (
			<div className="pageheader">
				<div className="container list">
				<span>
					<Link to="diffClass"><i className="fa fa-bars"/></Link>
				</span>
					<span>首页</span>
					<span>
					<Link to="/login">
						<img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
				</span>
				</div>
				{/*<ul className="list fa-ul">
				 <li className=""><Link to="diffClass"><i className="fa-li fa fa-bars"/></Link></li>
				 <li className="">首页</li>
				 <li className="">
				 <Link to="/login">
				 <img src={require( '../img/1.png' )} width="30" height="30" alt=""/>
				 </Link>
				 </li>
				 </ul>*/}
			</div>
		);
	}
}
