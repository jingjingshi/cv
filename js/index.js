 $(document).ready(function() {
$('#fullpage').fullpage({
	//设置背景颜色
	sectionsColor:['#FFCE44','#FFFCF3','#A2F3A4','#F54BDB'],
	//设置锚链接
	anchors:['page1','page2','page3','page4'],
	//设置固定元素
	fixedElements:'#header',
	//设置翻页小圆点
	navigation:true,
	navigationPosition:'right',
	navigationTooltips:['个人简介','掌握技能','我的作品','关于我'],
	//翻页小圆点的显示
    showActiveTooltip:true,
    //满屏有滚动条，需插件配合，scrollOverflow
    //自己控制页面样式
    verticalCentered:false,
});

});
 
