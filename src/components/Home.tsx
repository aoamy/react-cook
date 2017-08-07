// ------------------------------------------------------------------------------
//
// 首页
// class: Home
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/19
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { getImgUrl } from "../conf/conf";
import { Link } from "react-router-dom";

export interface HomeState
{
	data:any;
	table:{ striped?:boolean };
}

export default class Home extends React.Component<any, any>
{
	public static defaultProps = {
		data: [ {
			bgimage: "home1.png",
			header: "header1.png",
			name: '米其林三星',
			star: 3,
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
			data: props.data,
			table: { striped: true }
		};
	}

	private btnClick( style:'striped' )
	{
		// const { table } = this.props;
		const table = (this.state as HomeState).table;
		table[ style ] = !table[ style ];

		this.setState( {
			table
		} );
	}

	// private setDivWidth( star:number )
	// {
	// 	return "width=" + (30 * star);
	// }

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
					<div className="lists" key={index}>
						<img src={getImgUrl( data.bgimage )} width="100%" alt=""/>
						<div className="title">
							{/*<div className="title-message">*/}
							<div className="head-photo">
								<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
							</div>
							<div className="message">
								<h5>{data.name}<i className="fa fa-star"/></h5>
								<p>{data.container}</p>
							</div>
							{/*<div className="user-sig">*/}
								{/*<p>{data.container}</p>*/}
							{/*</div>*/}
							<div className="give-heart">
								<i className="fa fa-heart"/>
								<p>{data.size}</p>
							</div>
						</div>
					</div>
				);
			}
		);
	}

	public render()
	{
		// const {state}=this.props;
		const state:HomeState = this.state as HomeState;
		const hiddle = state.table.striped ? { display: 'none' } : { display: 'block' };
		const containers = this.createList( this.state.data );
		// console.log( this.state.data );
		return (
			<div className="app">
				{/*<img src={require("../img/bg.png")} alt=""/>*/}
				{/*<div className="pageheader">*/}
				<div className="container list">
				<span>
					<Link to="diffClass"><i className="fa fa-bars"/></Link>
				</span>
					<span>首页</span>
					<span>
					<div className="col">
					   <Link to="/login">
						    <img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
					   </Link>
					</div>
				</span>
					{/*</div>*/}
				</div>
				<div className="container">
					{containers}
					<div className="search" style={hiddle}>
						<div className="search-input">
							<label>搜索&nbsp;
								<input type="text" placeholder=""/>
								<i className="fa fa-search"/>
							</label>
						</div>
						<div className="foots">
							<div className="photobox">
								{/*<a>*/}
								<img src={require( '../img/foods-1.png' )} width="65" height="40"/>
								<br/>
								<span>主菜</span>
								{/*</a>*/}
							</div>
							<div className="photobox">
								{/*<a>*/}
								<img src={require( '../img/foods-2.png' )} width="65" height="40"/>
								<br/>
								<span>面食</span>
								{/*</a>*/}
							</div>
							<div className="photobox">
								{/*<a>*/}
								<img src={require( '../img/foods-3.png' )} width="70" height="40"/>
								<br/>
								<span>甜点</span>
								{/*</a>*/}
							</div>
						</div>
					</div>
					<button className="button" onClick={this.btnClick.bind( this, 'striped' )}>
						<i className="fa fa-search"/>
					</button>
				</div>
			</div>
		);
	}
}
