import {RouteRecordRaw} from "vue-router";
import {Welcome} from "../view/welcome";
import {First} from "../components/Welcome/First";
import {FirstActions} from "../components/Welcome/FirstAction";
import {Second} from "../components/Welcome/Second";
import {SecondActions} from "../components/Welcome/SecondActions";
import {Third} from "../components/Welcome/Third";
import {Fourth} from "../components/Welcome/Fourth";
import {User} from "../view/user";
import {Start} from "../view/start";
import {ThirdActions} from "../components/Welcome/ThirdActions";
import {FourthActions} from "../components/Welcome/FourthAction";

export const routes: Array<RouteRecordRaw> = [
    {path: '/', redirect: '/welcome/1'},
    {
        path: '/Welcome',
        component: Welcome,
        children: [
            {path: '', redirect: '/welcome/1'},
            {path: '1', components: {main: First, footer: FirstActions},},
            {path: '2', components: {main: Second, footer: SecondActions}},
            {path: '3', components: {main: Third, footer: ThirdActions}},
            {path: '4', components: {main: Fourth, footer: FourthActions}},
        ]
    },
    {path: '/user', component: User},
    {path: '/start', component: Start},
]