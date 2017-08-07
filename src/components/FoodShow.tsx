// ------------------------------------------------------------------------------
//
// 美食展
// class: FoodExhibition
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/24
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";

export interface ShowState
{
	data:any;
}
export default class FoodShow extends React.Component<any, any>
{
	public static defaultProps = {
		data: [ {
			link: '/foodDetails',
			bgimage: "food1.png",
			header: "header1.png",
			name: '米其林三星',
			// star: 3,
			food: "肉丸意面",
			container: '我最喜欢的，就是把握的温柔全做进菜里面，让它在你的口中绽放。'
			// heart: '',
		},
			{
				link: '',
				bgimage: "food2.png",
				header: "header2.png",
				name: '我是一个饲养员',
				// star: 5,
				food: "奶油浓汤",
				container: '一口绵糯，两口香滑；第三口是什么味道呢？'
				// heart: '',
			},
			{
				link: '',
				bgimage: "food3.png",
				header: "header1.png",
				name: '米其林三星',
				// star: 5,
				food: "培根西红柿煎蛋",
				container: '有人说最好的早餐是什么？我喜欢的就是每天早上醒来嗅到的那一缕煎蛋香。'
				// heart: '',
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
	//
	// Class properties
	//
	// --------------------------------------------------------------------------

	// --------------------------------------------------------------------------
	//
	// Event handlers
	//
	// --------------------------------------------------------------------------
	private createList( list:Array<{
		link:string,
		bgimage:string,
		header:string,
		name:string,
		food:string,
		container:string
		// heart:string,
	}> )
	{
		return list.map( ( data, index ) =>
			{
				return (
					index % 2 === 0 ? (
						<Link to={data.link} key={index}>
							<div className="menu-lists">
								<img src={getImgUrl( data.bgimage )} alt=""/>
								<div className="words position content">
									{/*<div>*/}
									<div className="center">
										<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
									</div>
									<i className='fa fa-star'/>
									<h5>{data.name}</h5>
									{/*</div>*/}
									<h5 className="menu">{data.food}</h5>
									<p className="end">{data.container}</p>
								</div>
							</div>
						</Link>)
						: (
						<Link to={data.link} key={index}>
							<div className="menu-lists">
								{/*<div className="position word-posi">*/}
								<img className="img-position" src={getImgUrl( data.bgimage )} alt=""/>
								{/*</div>*/}
								<div className="words word-posi content">
									{/*<div>*/}
									<div className="center">
										<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
									</div>
									<i className='fa fa-star'/>
									<h5>{data.name}</h5>
									{/*</div>*/}
									<h5 className="yellow">{data.food}</h5>
									<p className="end">{data.container}</p>
								</div>
							</div>
						</Link>)
				);
			}
		);
	}

	public render()
	{
		const state:ShowState = this.state as ShowState;
		const containers = this.createList( this.state.data );
		return (
			<div className="app">
				<div className="container list">
				<span>
					<Link to="diffClass"><i className="fa fa-angle-left"/></Link>
				</span>
					<span>美食展</span>
					<span>
					<Link to="/login">
						<img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
				</span>
				</div>
				<div className="container">
					{containers}
					{/*<Link to="/cookbook">
					 <div className="menu-lists">
					 <div>
					 <img src={require( "../img/foot1.png" )} width="100%" height="100%" alt=""/>
					 </div>
					 <div className="words position">
					 <div>
					 <div className="head-photo center">
					 <img src={require( "../img/header1.png" )} width="100%" height="100%" alt=""/>
					 </div>
					 <i className='fa fa-star'/>
					 <h5>米其林三星</h5>
					 </div>
					 <h5 className="menu">肉丸意面</h5>
					 <p>我最喜欢的，就是把握的温柔全做进菜里面，让它在你的口中绽放。</p>

					 </div>
					 </div>
					 </Link>
					 <Link to="">
					 <div className="menu-lists">
					 <div className="position">
					 <img src={require( "../img/foot2.png" )} width="100%" height="100%" alt=""/>
					 </div>
					 <div className="words">
					 <div>
					 <div className="head-photo center">
					 <img src={require( "../img/header2.png" )} width="100%" height="100%" alt=""/>
					 </div>
					 <i className='fa fa-star'/>
					 <h5>我是一个饲养员</h5>
					 </div>
					 <h5 className="yellow">奶油浓汤</h5>
					 <p>一口绵糯，两口香滑；第三口是什么味道呢？</p>

					 </div>
					 </div>
					 </Link>
					 <Link to="">
					 <div className="menu-lists">
					 <div>
					 <img src={require( "../img/foot3.png" )} width="100%" height="100%" alt=""/>
					 </div>
					 <div className="words position">
					 <div>
					 <div className="head-photo center">
					 <img src={require( "../img/header1.png" )} width="100%" height="100%" alt=""/>
					 </div>
					 <i className='fa fa-star'/>
					 <h5>米其林三星</h5>
					 </div>
					 <h5 className="menu">培根西红柿煎蛋</h5>
					 <p>有人说最好的早餐是什么？我喜欢的就是每天早上醒来嗅到的那一缕煎蛋香。</p>

					 </div>
					 </div>
					 </Link>*/}
				</div>
			</div>
		);
	}
}
