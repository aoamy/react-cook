// ------------------------------------------------------------------------------
//
// 菜单
// class: Menu
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/23
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";

export default class Menu extends React.Component<any, any>
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
					<Link to="diffClass"><i className="fa fa-angle-left"/></Link>
				</span>
					<span>菜单</span>
					<span>
					<Link to="/login">
						<img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
				</span>
				</div>
				<div className="container">
					<Link to="">
						<div className="menu-lists">
							<img src={require( "../img/menu1.png" )} alt=""/>
							<div className="words position">
								<div className="right"><i className="fa fa-heart"/><p>18.5K</p></div>
								<h4 className="one">贵族单人餐</h4>
								<p>一杯酒、一道菜、</p>
								<p>一个人、一独尊。</p>
								<p className="p">由<span>凯瑟琳</span>发布</p>
							</div>
						</div>
					</Link>
					<Link to="">
						<div className="menu-lists">
							<div className="words word-posi">
								<div className="left"><i className="fa fa-heart"/><p>18.5K</p></div>
								<h4 className="two">温馨二人餐</h4>
								<p>几盏烛灯由你亲手点燃，</p>
								<p>几道可口饭你亲手完成 ···</p>
								<p className="p">由<span>MRS.陈</span>发布</p>
							</div>
							<img className="img-position" src={require( "../img/menu2.png" )} alt=""/>
							{/*<div className="position">*/}
						{/*</div>*/}
						</div>
					</Link>

					<Link to="cookbook">
						<div className="menu-lists">
							<img src={require( "../img/menu3.png" )} alt=""/>
							<div className="words position">
								<div className="right"><i className="fa fa-heart"/><p>18.5K</p></div>
								<h4 className="many">多人聚会</h4>
								<p>在某个周末，叫上几个朋友，</p>
								<p>展示一下厨艺，畅聊一下心情。</p>
								<div className="p">由<span>米其林star</span>发布</div>
							</div>
						</div>
					</Link>
				</div>;
			</div>
		);
	}
}
