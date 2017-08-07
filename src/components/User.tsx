// ------------------------------------------------------------------------------
//
// 我的，登录用户
// class: User
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/30
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { DiffState } from "./DiffClass";
import { getImgUrl } from "../conf/conf";
import { Link } from "react-router-dom";

export default class User extends React.Component<any, any>
{
	public static defaultProps = {
		data: [ {
			bgimage: "home1.png",
			header: "header1.png",
			name: '米其林三星',
			// star: 3,
			container: '作为饲养员，很高兴与你分享美食。',
			// heart: '',
			size: '18.5K'
		},
			{
				bgimage: "home2.png",
				header: "header2.png",
				name: '我是一个饲养员',
				// star: 5,
				container: '我的菜不怕你不爱，只怕你更爱！！！',
				// heart: '',
				size: '23.5K'
			},
			{
				bgimage: "home3.png",
				header: "header3.png",
				name: '厨娘007',
				// star: 5,
				container: '我是一只小厨娘，哈哈哈！',
				// heart: '',
				size: '9.8K'
			} ]
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

	// --------------------------------------------------------------------------

	// --------------------------------------------------------------------------
	//
	// Event handlers
	//
	// --------------------------------------------------------------------------
	private createList( list:Array<{
		bgimage:string,
		header:string,
		name:string,
		// star:number,
		container:string,
		// heart:string,
		size:string
	}> )
	{
		return list.map( ( data, index ) =>
			{
				return (
					<div className="diff-lists" key={index}>
						<div className="col">
							<img src={getImgUrl( data.bgimage )} width="100%" alt=""/>
						</div>
						<div className="title">
							{/*<div className="col">*/}
								<div className="head-photo">
									<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
								</div>
							{/*</div>*/}
							<div className="message">
								<p>{data.name}<i className="fa fa-star"/></p>
								<p className="small">{data.container}</p>
							</div>
							<div className="give-heart">
								<i className="fa fa-heart"/>
								<p className="small">{data.size}</p>
							</div>
						</div>
					</div>
				);
			}
		);
	}

	public render()
	{
		const state:DiffState = this.state as DiffState;
		const containers = this.createList( this.state.data );
		return (
			<div className="app app-height">
				<div className="container list">
				<span>
					<Link to="/home"><i className="fa fa-bars"/></Link>
				</span>
					<span>本大厨</span>
					<span>
					<Link to="/login">
						<i className="fa fa-angle-left"/>
						</Link>
				</span>
				</div>
				<div className="classify">
					<div className="user-left pans">
						{containers}
					</div>
					<div className="users">
						<ul className="user">
							<li><a href="#">发布</a></li>
							<li><a href="#">关注</a></li>
							<li><a href="#">粉丝</a></li>
							<li><a href="#">收藏夹</a></li>
							<li><a href="#">喜欢</a></li>
							<li><a href="#">获取的菜单</a></li>
							<li><a href="#">设置</a></li>
						</ul>
						<p className="user-span">做饭吧1.1</p>
					</div>
				</div>
			</div>
		);
	}
}
