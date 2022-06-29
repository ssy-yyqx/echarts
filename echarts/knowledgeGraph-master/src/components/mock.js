/**
 * 图谱数据源
 */
export const dataList = 
{
    nodes: [
        {
            "data": "{}",
            "index": [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            "name": "步兵",
            "id": "步兵",
            "categories": [
                "bz"
            ],
            "value": 10,
            "varname": [
                "bz"
            ],
            "symbolSize": 90,
            "info": "步兵",
            "itemStyle": {
                color: '#f00'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            "name": "原沈阳战区",
            "id": "原沈阳战区",
            "categories": [
                "zq"
            ],
            "value": 10,
            "varname": [
                "zq"
            ],
            "symbolSize": 23.6666666666666665,
            "info": "原沈阳战区",
            "itemStyle": {
                color: 'orange'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            "name": "H省军区边防第四团第三营第十二连",
            "id": "H省军区边防第四团第三营第十二连",
            "categories": [
                "fh"
            ],
            "value": 10,
            "varname": [
                "fh"
            ],
            "symbolSize": 19.12381,
            "info": "H省军区边防第四团第三营第十二连",
            "itemStyle": {
                color: 'yellow'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            "name": "12连",
            "id": "12连",
            "categories": [
                "jc"
            ],
            "value": 10,
            "varname": [
                "jc"
            ],
            "symbolSize": 19.12381,
            "info": "12连",
            "itemStyle": {
                color: 'green'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            "name": "2011-12-25",
            "id": "2011-12-25",
            "categories": [
                "ry"
            ],
            "value": 10,
            "varname": [
                "ry"
            ],
            "symbolSize": 19.12381,
            "info": "2011-12-25",
            "itemStyle": {
                color: 'cyan'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                1
            ],
            "name": "军（警）官",
            "id": "军（警）官",
            "categories": [
                "rylb"
            ],
            "value": 10,
            "varname": [
                "rylb"
            ],
            "symbolSize": 19.12381,
            "info": "军（警）官",
            "itemStyle": {
                color: 'blue'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                2,
                4
            ],
            "name": "111002085002",
            "id": "111002085002",
            "categories": [
                "ggry"
            ],
            "value": 10,
            "varname": [
                "ggry"
            ],
            "symbolSize": 19.12381,
            "info": "111002085002",
            "itemStyle": {
                color: 'purple'
              }
        },
        {
            "data": "{}",
            "index": [
                0,
                2,
                4
            ],
            "name": "许聚东",
            "id": "许聚东",
            "categories": [
                "xm"
            ],
            "value": 10,
            "varname": [
                "xm"
            ],
            "symbolSize": 19.12381,
            "info": "许聚东",
            "itemStyle": {
                color: '#e56f88'
              }
        },
        {
            "data": "{}",
            "index": [
                1,
                3,
                5
            ],
            "name": "230833198105250314",
            "id": "230833198105250314",
            "categories": [
                "ggry"
            ],
            "value": 10,
            "varname": [
                "ggry"
            ],
            "symbolSize": 19.12381,
            "info": "230833198105250314",
            "itemStyle": {
                color: '#318aa1'
              }
        },
        {
            "data": "{}",
            "index": [
                1,
                3,
                5
            ],
            "name": "陆汝斌",
            "id": "陆汝斌",
            "categories": [
                "xm"
            ],
            "value": 10,
            "varname": [
                "xm"
            ],
            "symbolSize": 19.12381,
            "info": "陆汝斌",
            "itemStyle": {
                color: '#675ce9'
              }
        },
        {
            "data": "{}",
            "index": [
                2,
                3
            ],
            "name": "士官",
            "id": "士官",
            "categories": [
                "rylb"
            ],
            "value": 10,
            "varname": [
                "rylb"
            ],
            "symbolSize": 19.12381,
            "info": "士官",
            "itemStyle": {
                color: '#e55d5d'
              }
        },
        {
            "data": "{}",
            "index": [
                4,
                5
            ],
            "name": "义务兵",
            "id": "义务兵",
            "categories": [
                "rylb"
            ],
            "value": 10,
            "varname": [
                "rylb"
            ],
            "symbolSize": 19.12381,
            "info": "义务兵",
            "itemStyle": {
                color: '#fa9626c7'
              }
        },
        {
            "id": "111002085",
            "name": "111002085",
            "categories": [
                "111002085"
            ],
            "varname": [
                "111002085"
            ],
            "symbolSize": 19.12381,
            "value": 20,
            "info": "111002085",
            "itemStyle": {
                color: '#d3134d'
              }
        }
        
    ],
    edges: [
        {
            "target": "111002085",
            "source": "步兵",
            "value": "兵种"
        },
        {
            "target": "111002085",
            "source": "原沈阳战区",
            "value": "战区"
        },
        {
            "target": "111002085",
            "source": "H省军区边防第四团第三营第十二连",
            "value": "部队番号"
        },
        {
            "target": "111002085",
            "source": "12连",
            "value": "部队简称"
        },
        {
            "target": "111002085",
            "source": "2011-12-25",
            "value": "人员实力"
        },
        {
            "target": "2011-12-25",
            "source": "军（警）官",
            "value": "人员类别"
        },
        {
            "target": "2011-12-25",
            "source": "士官",
            "value": "人员类别"
        },
        {
            "target": "2011-12-25",
            "source": "义务兵",
            "value": "人员类别"
        },
        {
            "target": "111002085",
            "source": "111002085002",
            "value": "包含"
        },
        {
            "target": "111002085",
            "source": "230833198105250314",
            "value": "包含"
        },
        {
            "target": "111002085002",
            "source": "许聚东",
            "value": "姓名"
        },
        {
            "target": "230833198105250314",
            "source": "陆汝斌",
            "value": "姓名"
        }
    ],
}