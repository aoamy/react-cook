// ------------------------------------------------------------------------------
//
// 菜谱 -苦瓜酿肉
// class: Cookery
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/26
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";

export default class Cookery extends React.Component<any, any>
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
	// --------------------------------------------------------------------------
	public render()
	{
		return (
			<div className="app">
				<div className="container list">
				<span>
					<Link to="cookbook"><i className="fa fa-angle-left"/></Link>
				</span>
					<span>菜谱</span>
					<span>
					<Link to="/login">
						<img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
				</span>
				</div>
			<div className="containers color">
				<div className="cook-top">
					<div className="cook-bg">
						<div className="bg"><img src={require( '../img/ck-1.png' )} width="100%" height="100%" alt=""/>
						</div>
						<h3>苦瓜酿肉</h3>
					</div>
					<div className="success">
						<h3>165</h3>
						<br/>
						<h4>人成功过</h4>
					</div>
				</div>
				<div className="cookery">
					<div className="img-lists">
						<div className="img-list">
							<img src={require( '../img/ck-5.png' )} alt=""/>
						</div>
						<div className="img-list">
							<img src={require( '../img/ck-6.png' )} alt=""/>
						</div>
						<div className="img-list">
							<img src={require( '../img/ck-3.png' )} alt=""/>
						</div>
						<div className="img-list">
							<img src={require( '../img/ck-7.png' )} alt=""/>
						</div>
						<div className="img-list">
							<img src={require( '../img/ck-2.png' )} alt=""/>
						</div>
						<div className="img-list">
							<img src={require( '../img/ck4.png' )} alt=""/>
						</div>
					</div>
					<div className="ck-right">
						<div className="ck-main">
							<span className="main ck-btn">主料</span>
							<span className="small">苦瓜1根</span>&nbsp; &nbsp;
							<span className="small">猪肉馅200g</span>
						</div>

						<div className="ck-second">
							<span className="second ck-btn">辅材</span>
							<span className="small ck-word">
								<span>盐 3g </span>
								<span>葱花 5g</span>
								<span>糖 2g </span>
								<span>红椒末3g</span>
								<span>鸡精 1g</span>
								<span>姜末 5g </span>
								<span>玉米淀粉 8g </span>
								<span>白胡椒粉 1g</span>
							</span>
						</div>
						<div className="ck-method">
							<span className="method ck-btn">做法</span>
							<span>1 备好食材：苦瓜和猪肉末</span>
							<div className="img"><img src={require( '../img/cook1.png' )} alt=""/></div>
							<p className="last">2 肉末里分别放入盐2克、姜末、葱花、鲜酱油、糖、玉米淀粉、白胡椒粉、鸡精</p>
							<div className="img"><img src={require( '../img/cook2.png' )} alt=""/></div>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
