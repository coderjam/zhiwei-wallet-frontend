import {Home} from "../view/home";
import {About} from "../view/about";
import {RouteRecordRaw} from "vue-router";
import {Welcome} from "../view/welcome";
import {First} from "../components/Welcome/First";
import {Second} from "../components/Welcome/Second";
import {Third} from "../components/Welcome/Third";
import {Fourth} from "../components/Welcome/Fourth";

export const routes:Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path:'/Welcome',
        component: Welcome,
        children:[
            {path:'1', component:First},
            {path:'2', component:Second},
            {path:'3', component:Third},
            {path:'4', component:Fourth},
        ]
    }
]