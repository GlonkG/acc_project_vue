import Vue from 'vue'
import Router from 'vue-router'
import logreg from '@/components/public/logreg'

import chat from '@/components/chat'
import eight from '@/components/eight'
import invite from '@/components/invite'
import main from '@/components/main'

//后台管理
import admin from '@/components/manage/admin'
import login from '@/components/manage/login'
//全部用户
import user from '@/components/manage/user/user'
import upduser from '@/components/manage/user/upduser'
//陪玩
import accplayer from '@/components/manage/accplayer/accplayer'
import updaccplayer from '@/components/manage/accplayer/updaccplayer'
//专员审核
import audit from '@/components/manage/audit/audit'
import safeaudit from '@/components/manage/audit/safeaudit'
//echarts图表
import bar from '@/components/manage/echarts/bar'
import pie from '@/components/manage/echarts/pie'
/*import circle from '@/components/manage/echarts/circle'*/


//公司简介
import introduce from '@/components/manage/company/introduce'
//免责声明
import disclaimer from '@/components/manage/company/disclaimer'

//前端用户登录注册
import memory from '@/components/memory/memory'
import mlogin from '@/components/memory/mlogin'
import mregist from '@/components/memory/mregist'
//个人中心
import userinfo from '@/components/db/userinfo'
//我下的单
import mycart from '@/components/db/observe/mycart'
import all from '@/components/db/observe/cartinformation/all'
import interim from '@/components/db/observe/cartinformation/interim'
import paypaid from '@/components/db/observe/cartinformation/paypaid'
//账户管理
import myaccount from '@/components/db/observe/myaccount'
//个人资料
import myinfo from '@/components/db/observe/myinfo'
//设置中心
import setting from '@/components/db/observe/setting'
//认证页面
import verify from '@/components/db/observe/verify'
//陪玩相册管理
import img from '@/components/db/observe/img'
//关于我们
import us from '@/components/db/observe/us'
//公共部分
//import head from '@/components/public/header'

//陪玩页面
import peiwan from '@/components/peiwan'
//搜索页面
import search from '@/components/search'
//详情页面
import playerinfo from '@/components/playerinfo'
//购物车详情页面
import cartinfo from'@/components/cartinfo'
import applyText from '@/components//applyText'

import duanyou from '@/components/duanyou'
import fastsearch from '@/components/fastsearch'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/logreg',
      name: 'logreg',
      component: logreg
    },
    {
      path:'/playerinfo/:apid',
      name:'playerinfo',
      component:playerinfo
    },
    {
      path:'/cartinfo/:orderNo',
      name:'cartinfo',
      component:cartinfo
    },
    {
      path:'/applyText',
      name:'applyText',
      component:applyText
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite,
      children:[
        {
          path:'/duanyou',
          name: 'duanyou',
          component: duanyou
        }
      ]
    },
    {  path: '/fastsearch/:gName/:usergender/:nums/:beizhu',
         name: 'fastsearch',
         component: fastsearch
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
      children:[
        {
          path:'/mycart',
          name:'mycart',
          component:mycart,
          children:[
            {
              path:'/all',
              name:'all',
              component:all
            },
            {
              path:'/interim',
              name:'interim',
              component:interim
            },
            {
              path:'/paypaid',
              name:'paypaid',
              component:paypaid
            }
          ]
        },
        {
          path:'/myaccount',
          name:'myaccount',
          component:myaccount
        },
        {
          path:'/myinfo',
          name:'myinfo',
          component:myinfo
        },
        {
          path:'/setting',
          name:'setting',
          component:setting
        },
        {
          path:'/us',
          name:'us',
          component:us
        },
        {
          path:'/img/:apid',
          name:'img',
          component:img
        }
      ]
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/eight',
      name: 'eight',
      component: eight
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/search/:condition',
      name: 'search',
      component: search
    },
    {
      path:'/peiwan',
      name:'peiwan',
      component:peiwan
    },
    {
      path:'/admin',
      name:'admin',
      component:admin,
      children:[
        {
          path:'/user',
          name:'user',
          component:user
        },
        {
          path:'/upduser/:uid',
          name:'upduser',
          component:upduser
        },
        {
          path:'/accplayer',
          name:'accplayer',
          component:accplayer
        },
        {
          path:'/updaccplayer/:apid',
          name:'updaccplayer',
          component:updaccplayer
        },
        {
          path:'/audit',
          name:'audit',
          component:audit
        },
        {
          path:'/safeaudit',
          name:'safeaudit',
          component:safeaudit
        },
        {
          path:'/bar',
          name:'bar',
          component:bar
        },
        {
          path:'/pie',
          name:'pie',
          component:pie
        },
        {
          path:'/introduce',
          name:'introduce',
          component:introduce
        },
        {
          path:'/disclaimer',
          name:'disclaimer',
          component:disclaimer
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/memory',
      name:'memory',
      component:memory,
      children:[
        {
          path:'/mlogin',
          name:'mlogin',
          component:mlogin
        },
        {
          path:'/mregist',
          name:'mregist',
          component:mregist
        }
      ]
    },
    {
      path:'/verify',
      name:'verify',
      component:verify
    }
    /*,
    {
      path:'/head',
      name:'head',
      component:head
    }*/
  ]
})
