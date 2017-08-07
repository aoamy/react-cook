// ------------------------------------------------------------------------------
//
// 登录页面
// class: Logo
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/20
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link, NavLink } from "react-router-dom";

export default class Login extends React.Component<any, any>
{
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
	// --------------------------------------------------------------------------
	public render()
	{
		return (
			<div className="app app-bg">
				<div className="container list">
					<span><Link to=""><i className="fa fa-bars"/></Link></span>
					<span>登录</span>
					<span>
					    <NavLink to="" className="navlink" activeClassName="selected">注册</NavLink>
				    </span>
				</div>
				<div className="container cont">
					<form action="">
						<div className="col">
							<div className="header">
								<img src={require( '../img/header.png' )} width="50" height="50" alt=""/>
							</div>
						</div>
						<div className="login-list">
							<label>国家</label>
							<input type="text" placeholder=""/>
							<label><i className="fa fa-angle-down"/></label>
						</div>
						<div className="login-list">
							<label>+86</label>
							<input type="text" placeholder="请输入登录手机号"/>
						</div>
						<div className="login-list">
							<label>密码</label>
							<input type="password" placeholder=""/>
						</div>

						<button className="btn btn-danger">
							<Link to="/user">登录</Link>
						</button>
						<br/>
						<a>忘记了密码？</a>
						<div id="third-party">
							<p>第三方登录</p>
							<a href=""><i className="fa fa-weixin"/></a>
							<a href=""><i className="fa fa-qq"/></a>
							<a href=""><i className="fa fa-weibo"/></a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
