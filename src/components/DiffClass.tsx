// ------------------------------------------------------------------------------
//
// 分类
// class: DiffClass
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/23
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";
/*export interface ClassState
 {
 triggerType:string;
 effect:string;
 titles:any;
 contents:any;
 }*/
export interface DiffState
{
	data:any;
	// table:{ striped?:boolean };
}

export default class DiffClass extends React.Component<any, any>
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
	/*public static  defaultProps = {
	 triggerType: "click",  //用来定义鼠标的触发类型，是click还是 mouseover
	 effect: "default",         //用来定义内容切换效果,是直接切换还是淡入淡出效果
	 invoke: 1,                 //默认显示第几个tab
	 title:['首页','美食展','菜单','菜谱'], //tab 标签
	 };*/
	public constructor( props:any )
	{
		super( props );
		this.state = {
			data: props.data
			// table: { striped: true }
		};
		// this.state = {
		// 	itemSelected: '首页',
		// 	title:[],
		// 	contents:[]
		// };
		// this._onClickItem = this._onClickItem.bind(this);

	}

	/*componentDidMount()
	 {
	 let titles = $('.title-ul li');//标签列表
	 let contents = $('.pan');//内容列表
	 let config = this.props;
	 if (config.triggerType === "click") {
	 this.handleClick();
	 } else if (config.triggerType === "mouseover") {
	 this.handleMouseOver();
	 }
	 //指定初始的页面
	 if(this.props.invoke>1){
	 this.handleInvoke(titles.eq(this.props.invoke-1));
	 }
	 }

	 //鼠标点击事件
	 private handleClick = () => {
	 let self = this;
	 this.titles.bind("click", function () {
	 self.handleInvoke($(this));
	 });
	 };
	 //鼠标悬浮事件
	 private	handleMouseOver = () => {
	 let _this = this;
	 this.titles.bind("mouseover", function () {
	 _this.handleInvoke($(this));
	 });
	 };
	 //事件驱动函数
	 private handleInvoke = (currentItem:number ) => {
	 let index = currentItem.index();//当前点击的item,在titles集合里的位置
	 currentItem.addClass("active").siblings().removeClass("active"); //把点击的item上添加了 active class属性，并且把其他的兄弟元素的 active属性 移除
	 let effect = this.props.effect;
	 if (effect === "fade") {
	 this.contents.eq(index).fadeIn().siblings().fadeOut();
	 } else {
	 this.contents.eq(index).addClass("current").siblings().removeClass("current");
	 }
	 };*/

	/*private getPage(){
	 let box = document.getElementById("box");
	 let btn = box.getElementsByTagName("title-ul>li");
	 let pan = box.getElementsByClassName("pan");
	 //aBtn是一组元素，所以需要用到for循环

	 for(let i=0;i<btn.length;i++){
	 btn[i].index=i;
	 btn[i].onclick=function(){
	 for(var k=0;k<btn.length;k++){//先清空所有的样式
	 btn[k].className ='';
	 pan[k].style.display ='none';
	 }
	 //给当前的按钮和div添加样式
	 this.className ='on';
	 pan[this.index].style.display ='block';
	 };
	 }
	 }*/
	// private getClick(style:'striped'){
	//
	// }
	private createList( list:Array<{
		bgimage:string,
		header:string,
		name:string,
		star:number,
		container:string,
		size:string
	}> )
	{
		return list.map( ( data, index ) =>
			{
				return (
					<div className="diff-lists" key={index}>
						<img src={getImgUrl( data.bgimage )} width="100%" alt=""/>
						<div className="title">
						{/*<div className="title-message">*/}
						<div className="head-photo">
						<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
						</div>
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

	public    render()
	{
		const state:DiffState = this.state as DiffState;
		// const hiddle = state.table.striped ? { display: 'none' } : { display: 'block' };
		const containers = this.createList( this.state.data );
		return (
			<div className="app app-height">
				<div className="container list">
				<span>
					<Link to="/home"><i className="fa fa-angle-left"/></Link>
				</span>
					<span>分类</span>
					<span>
						<div className="col">
					     <Link to="/login">
						  <img src={require( '../img/1.png' )} width="20" height="20" alt=""/>
						</Link>
						</div>
				</span>
				</div>
				<div id="box" className="classify ">
					<div className="diff-left">
						<ul className="title-ul diff-class active">
							<li><Link to="/home">首页</Link></li>
							<li><Link to="/foodshow">美食展</Link></li>
							<li><Link to="menu">菜单</Link></li>
							<li><Link to="cookbook">菜谱</Link></li>
						</ul>
						<p className="diff-bottom">做饭吧1.1</p>
					</div>
					<div className="diff-right pans">
						{containers}
					</div>
				</div>
			</div>
		);
	}
}
