// 在这里配置所有的路由组件

// 首页
import HomePage from '@/views/HomePage/HomePage';

// 会员管理
import MemberInfo from '@/views/Member/MemberInfo';
import MemberWork from '@/views/Member/MemberWork';

// 产品管理
import ProductMedical from '@/views/Product/ProductMedical';
import ProductBook from '@/views/Product/ProductBook';
import ProductSport from '@/views/Product/ProductSport';

// 价格管理
import PriceList from '@/views/Price/PriceList';
import PriceSet from '@/views/Price/PriceSet';

// 网站管理
import WebSet from '@/views/Web/WebSet';

/**
 * @desc 路由配置
 * @param  {[Objcet]}  component  [路由对应的模块]
 * @param  {[Array]}   name       [路由对应的面包屑]
*/
export const routerConfig = {
    // 首页
    '/': {
        component: HomePage,
        name: ['首页'],
    },
    // 会员管理
    '/views/member/info': {
        component: MemberInfo,
        name: ['会员管理', '会员信息列表'],
    },
    '/views/member/work': {
        component: MemberWork,
        name: ['会员管理', '会员出勤详情'],
    },
    // 产品管理
    '/views/product/medical': {
        component: ProductMedical,
        name: ['产品管理', '医药'],
    },
    '/views/product/book': {
        component: ProductBook,
        name: ['产品管理', '图书'],
    },
    '/views/product/sport': {
        component: ProductSport,
        name: ['产品管理', '体育'],
    },
    // 价格管理
    '/views/price/list': {
        component: PriceList,
        name: ['价格管理', '价格列表'],
    },
    '/views/price/set': {
        component: PriceSet,
        name: ['价格管理', '价格设置'],
    },
    // 网站管理
    '/views/web/set': {
        component: WebSet,
        name: ['网站管理', '网站设置'],
    }
};