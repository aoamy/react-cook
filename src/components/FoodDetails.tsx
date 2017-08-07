// ------------------------------------------------------------------------------
//
// 美食展详情
// class: FoodDetails
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/26
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import { getImgUrl } from "../conf/conf";

export interface DetailsState
{
	data:any;
	table?:{ striped?:boolean, share?:boolean };
	// button:{ btn:boolean };
}

export default class FoodDetails extends React.Component<DetailsState, DetailsState>
{
	public static defaultProps = {
		data: [
			{
				bgimage: 'food1.png',
				header: 'header1.png',
				name: '米其林三星',
				content: '作为饲养员，很高兴与你分享美食。',
				btn: '获取菜谱'
			},
			{
				bgimage: 'food4.png',
				header: 'header2.png',
				name: '王子小姐',
				content: '作为饲养员，很高兴与你分享美食。',
				btn: '获取菜谱'
			}
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
			data: props.data,
			table: { striped: true, share: true }
		};
	}

	private createList( list:Array<{
		bgimage:string, header:string, name:string, content:string, btn:string
	}> )
	{
		return list.map( ( data, index ) =>
			{
				return (
					<div className="detail" key={index}>
						<div className="bgimage">
							<img src={getImgUrl( data.bgimage )} width="100%" alt=""/>
							<div className="top">
								<div className="head-photo">
									<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
								</div>
								<h4>{data.name}</h4>
								<p>{data.content}</p>
								<NavLink className="nav-link " activeClassName="selected" to="">
									{data.btn}
								</NavLink>
							</div>
						</div>
						<div className="bottom">
							<h5>我最喜欢的，就是把握的温柔全做进菜里面，让它在你的口中绽放。</h5>
							<div>
								<span>5小时前</span>
								<span>358
									<img src={require( "../img/share.png" )} onClick={this.showClick.bind( this, 'share' )} alt=""/>
								|</span>
								<span>1965
									 <img src={require( "../img/comment.png" )} alt=""/>
								|</span>
								<span>18.5K <i className="fa fa-heart"/></span>
							</div>
						</div>
					</div>
				);
			}
		);
	}

	// 点击显示更多内容,点击分享或取消
	private showClick( style:'striped' )
	{
		// const { table } = this.props;
		const table = (this.state as DetailsState).table;
		table[ style ] = !table[ style ];

		this.setState( {
			table
		} );
	}

	public render()
	{
		const state:DetailsState = this.state as DetailsState;
		const containers = this.createList( this.state.data );
		const show = state.table.striped ? { display: 'block' } : { display: 'none' };
		const showShare = state.table.share ? {} : { display: 'block' };
		const cancel = state.table.share ? { display: 'none' } : {};
		// const minheight = state.table.striped ? { 'min-height': '440px' } : { 'min-height': '585px' };
		return (
			<div className="app">
				<div className="container list">
				<span>
					<Link to="foodshow"><i className="fa fa-angle-left"/></Link>
				</span>
					<span>肉丸意面</span>
					<span>
					<Link to="/login">
						<img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
				</span>
				</div>
			<div className="containers pos">
				<div className="height">
					<div className="details">
						{containers}
					</div>
				</div>
				<div className="down" onClick={this.showClick.bind( this, 'striped' )} style={show}>
					<i className="fa fa-angle-down fa-2x"/></div>
				<div className="box" style={cancel || showShare}>
					<div className="share">
						<span>分享到...</span>
						<span onClick={this.showClick.bind( this, 'share' )}>取消</span>
					</div>
					<div className="icons">
						<div>
							<span className="fa-stack fa-3x">
							<i className="fa fa-circle-thin fa-stack-2x"/>
							<i className="fa fa-chrome fa-stack-1x "/>
						</span>
							<br/>
							<span className="word">微信朋友圈</span>
						</div>
						<div>
						<span className="fa-stack fa-3x">
							<i className="fa fa-circle-thin fa-stack-2x"/>
							<i className="fa fa-weixin fa-stack-1x "/>
						</span>
							<br/>
							<span className="word">微信好友</span>
						</div>
						<div>
						<span className="fa-stack fa-3x">
							<i className="fa fa-circle-thin fa-stack-2x"/>
							<i className="fa fa-qq fa-stack-1x "/>
						</span>
							<br/>
							<span className="word">QQ好友</span>
						</div>
						<div>
						<span className="fa-stack fa-3x">
							<i className="fa fa-circle-thin fa-stack-2x"/>
							<i className="fa fa-weibo fa-stack-1x "/>
						</span>
							<br/>
							<span className="word">新浪微博</span>
						</div>
						<div>
						<span className="fa-stack fa-3x">
							<i className="fa fa-circle-thin fa-stack-2x"/>
							<i className="fa fa-link fa-stack-1x "/>
						</span>
							<br/>
							<span className="word">复制链接</span>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
