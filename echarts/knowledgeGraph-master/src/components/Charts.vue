<template>
<div class="container">
        <div class="center">
            <div class="canvas">
                <div id="chart" class="chart"></div>
            </div>
        </div>
	</div>
    
</template>
<script>
    import{dataList} from './mock'
    // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/graph');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name:'Charts',
        data(){
            return {
                myChart:'',
                nodes:[],
                links:[],
            };
        },
        computed:{
            
        },
        methods:{
            /**
             * 设置echarts配置项,重绘画布
             */
            initCharts(){
                if(!this.myChart){
                    this.myChart = echarts.init(document.getElementById('chart'));
                }
                // 指定图表的配置项和数据
                let option = {
                    // 动画更新变化时间
                    animationDurationUpdate: 1500,                       
                    animationEasingUpdate: 'quinticInOut',  
                    tooltip:{
                        show:false
                    },
                    series: [
                        {
                            name: '关系图',
                            type:'graph',
                            layout:'force',
                            legendHoverLink: true, //是否启用图例 hover(悬停) 时的联动高亮。
                            hoverAnimation: true, //是否开启鼠标悬停节点的显示动画
                            edgeLabel: {   
                                position:'middle',       //边上的文字样式
                                normal: {
                                    formatter:"{c}",
                                    show:true,
                                    
                                }
                            },
                            edgeSymbol: ['arrow', ''],
                            force:{
                                edgeLength: 180,
                                repulsion:500
                            },
                            roam:true,
                            draggable : true,//每个节点的拖拉
                            itemStyle:{
                                normal: {
                                    cursor:'pointer',
                                    //color:Math.floor(Math.random()*16777215).toString(16),
                                    // color: ['#fc853e','#28cad8','#9564bf','#bd407e','#28cad8','#fc853e','#e5a214'],
                                    label: { 
                                            //formatter: "{c}",为什么这个写上就不打开了？
                                            show: true ,
                                            textStyle : { //标签的字体样式
                                                color : '#fff', //字体颜色
                                                fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                                                fontWeight : 'bolder',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                                                fontFamily : 'sans-serif', //文字的字体系列
                                                fontSize : 12, //字体大小
                                            }
                                    },
                                    nodeStyle: {
                                        brushType: "both",
                                        borderColor: "rgba(255,215,0,0.4)",
                                        borderWidth: 1,
                                    },
                                },
                                //鼠标放上去有阴影效果
                                emphasis: {
                                    shadowColor: '#00FAE1',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowBlur: 40,
                                },
                            },
                            lineStyle:{
                                width:2,
                            },
                            label:{
                                color:'#00FAE1',
                                fontSize:18,
                            },
                            symbolSize:60,//节点大小
                            links: dataList.edges,
                            data: dataList.nodes,
                            cursor: 'pointer',
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                this.myChart.setOption(option);
            },
            /**
             * 格式化数据到表格需要的数据
             */
            // formatData(){
                
            //     let nodes = []
            //     const data = []
            //     const links = []
            //     let target = ''
            //         this.nodes = []
            //         this.links = []
            //         nodes = [].concat(dataList)
            //     nodes.forEach((items,indexs)=>{
            //         items.nodes.forEach((item,index) => {
            //             // 注意 id必须是string  否则连线连不上
            //             const id = item.id + ''
            //             const dataInfo = {
            //                 "id": id,
            //                 parentId:target,
            //                 category:item.categary,
            //                 "name": item.label,
            //                 isClicked:false,
            //                  "itemStyle": item.itemStyle,
            //             }
            //             data.push(dataInfo)
                        
            //         })
            //         items.edges.forEach((i,d)=>{
            //                 links.push({
            //                     value:i.label,
            //                     target:i.from,
            //                     source:i.to,
            //                 })
            //         })
                    
                    
            //     })
            //     this.nodes.push(...data)
            //     this.links.push(...links)
            //     this.initCharts()
            // },
        },
        created(){
            
        },
        mounted(){
            this.initCharts()
        },
        beforeDestroy(){
            
        }
    }
</script>
<style scoped>
.chart{
    height:100%;
}
.container {
    overflow: hidden;
    position: relative;
    min-height: 100vh;
}
.canvas {
    margin-top: 10px;
	height: calc(100vh - 110px);
}
.center {
	position: relative;
	min-width: 1200px;
	margin: 0 auto;
    width: 85%;
}
.header {
	padding-top: 30px;
}
.ipt {
	border: 1px solid #9093c7;
	border-radius: 20px;
	width: 374px;
	height: 44px;
	line-height: 44px;
	box-sizing: border-box;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
}

.tips {
	font-size: 14px;
	color: #ccc;
	line-height: 17px;
	margin-top: 5px;
}
</style>