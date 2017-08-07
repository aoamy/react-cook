// ------------------------------------------------------------------------------
//
// conf
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/24
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
// import * as $ from 'jquery';

export const IMG_URL:string = "assets/";

export function getImgUrl( imgName:string )
{
	return IMG_URL + imgName;
}

// const WIDTH:string ="width:";
// export function  setDivWidth( stars:number )
// {
// 	let w=30 * stars;
//
// 	return WIDTH + "w";
// }
// function init()
// {
// 	// 初始化所有选项卡
//
// 	$( '[data-toggle="tabable"]' ).each( function( index, el )
// 	{
// 		//console.log("index",index,"el",el);
// 		initTab( $( el ) );
// 	} );
//
// 	// 初始化所有导航菜单
// }
//
// function initTab( $tabContainer )
// {
// 	//console.log("$tabContainer",$tabContainer);
// 	// 找到所有的选项卡元素
// 	let $tabs = $tabContainer.find( '.tabs > .tab' );
//
// 	// 找到所有的面板元素
// 	let $pans = $tabContainer.find( '.tab-pans > .tab-pan' );
// 	let pans = $pans.toArray();
//
// 	// 选项卡鼠标经过时，显示对应的面板
// 	$tabs.each( function( index, tab )
// 	{
// 		$( tab ).on( 'mouseenter', function( event )
// 		{
// 			//event.preventDefault();
//
// 			let id = $( this ).attr( 'data-href' ).substr( 1 );
// 			let pan = pans.filter( function( a )
// 			{
// 				return $( a ).attr( 'id' ) === id;
// 			} )[ 0 ];
//
// 			//pans.slice();// 复制指定区间的元素，并返回新数组，与原数组独立无关系
// 			// 对原数组进行插入、删除元素操作
// 			//pans.splice( pans.indexOf( pan ), 1 );
//
// 			// 选项卡选中效果
// 			$tabs.removeClass( 'selected' );
// 			$( this ).addClass( 'selected' );
//
// 			// 单独显示对应的面板
// 			$pans.hide();
// 			$( pan ).show();
// 		} );
// 	} );
//
// 	// 默认显示第一个选项卡
// 	$tabs.eq( 0 ).trigger( 'mouseenter' );
// }
