// ------------------------------------------------------------------------------
//
// 菜谱
// class: Cookbook
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/25
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import { getImgUrl } from "../conf/conf";
export interface CkState
{
	data:any;
}
export default class Cookbook extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{ link: 'cookery', bg: 'ck-1.png', name: '苦瓜酿肉' },
			{ link: '', bg: 'ck-2.png', name: '秘制烧酥肉' },
			{ link: '', bg: 'ck-3.png', name: '三鲜煎饺' },
			{ link: '', bg: 'ck-4.png', name: '鲜虾春卷' },
			{ link: '', bg: 'ck-5.png', name: '南瓜蓉汤' },
			{ link: '', bg: 'ck-6.png', name: '私家蛋炒饭' },
			{ link: '', bg: 'ck-7.png', name: '绝味卤蛋面' }
		]
	};
	// --------------------------------------------------------------------------
	//
	// Class constructor
	//
	// --------------------------------------------------------------------------

	public constructor( props:any )
	{
		super();
		this.state = {
			data: props.data
		};
	}

	private createList( list:Array<{ link:string, bg:string, name:string }> )
	{
		return list.map( ( data, index ) =>
			{
				return (
						<div className="cookbook-lists" key={index}>
							<NavLink className="navlink" activeClassName="selected" to={data.link}>
								<img src={getImgUrl( data.bg )} width="100%" height="100%" alt=""/>
								<div className="ck-box">{data.name}</div>
							</NavLink>
						</div>
				);
			}
		);
	}

	// --------------------------------------------------------------------------
	//
	// Event handlers
	//
	// --------------------------------------------------------------------------
	public render()
	{
		const state:CkState = this.state as CkState;
		const containers = this.createList( this.state.data );
		return (
			<div className="app">
				{/*<div className="pageheader">*/}
				<div className="container list">
				<span>
					<Link to="diffClass"><i className="fa fa-angle-left"/></Link>
				</span>
					<span>菜谱前奏</span>
					<span>
					<Link to="/login">
						<img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
				</span>
				</div>
				{/*</div>*/}
				<div className="containers">
					<div className="col">
						<div className="cookbook-img">
							<img src={require( "../img/cookbook1.png" )} width="100%" alt=""/>
						</div>
					</div>
					<div className="cookbook-box">
						<h4>多<span>|</span>人<span>|</span>聚<span>|</span>会</h4>
						<p className="cookbook-p">由<span>米其林star</span>发布&nbsp;&nbsp;
							<i className="fa fa-heart"/>
							<span>18.5K</span>
						</p>
					</div>
					<div className="cookbooks">
						<div className="cookbook-lists red">
							<NavLink className="navlink" activeClassName="selected" to="">
								<h3>开&nbsp;始<br/>做&nbsp;菜</h3>
							</NavLink>
						</div>
						{containers}
					</div>
				</div>
			</div>

		);
	}
}
