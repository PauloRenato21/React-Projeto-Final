/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import CategoryIcon from "@material-ui/icons/Category";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import BusinessIcon from "@material-ui/icons/Business";
import Unarchive from "@material-ui/icons/Unarchive";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
// core components/views for Admin layout
import Home from "views/Home/Home";
import AtletaHome from "views/Atleta/Index.js";
import AtletaCreate from "views/Atleta/AtletaCreate";
import AtletaPut from "views/Atleta/AtletaPut";
import ResponsavelHome from "views/Responsavel/Index.js";
import ResponsavelPut from "views/Responsavel/ResponsavelPut";
import FuncionarioHome from "views/Funcionario/Index.js";
import FuncionarioCreate from "views/Funcionario/FuncionarioCreate";
import FuncionarioPut from "views/Funcionario/FuncionarioPut";
import CargoHome from "views/Cargo/Index.js";
import CargoCreate from "views/Cargo/CargoCreate";
import CargoPut from "views/Cargo/CargoPut";
import TurmaHome from "views/Turma/Index.js";
import TurmaCreate from "views/Turma/TurmaCreate";
import CategoriaHome from "views/Categoria/Index.js";
import CategoriaCreate from "views/Categoria/CategoriaCreate";
import ClubeHome from "views/Clube/Index.js";
import ClubeCreate from "views/Clube/ClubeCreate";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import FranquiaHome from "views/Franquia/Index";
import FranquiaCreate from "views/Franquia/FranquiaCreate";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home Administrador",
    icon: Dashboard,
    component: Home,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/atleta",
    name: "Dashboard Atleta",
    icon: Person,
    component: AtletaHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/atleta",
    name: "Atleta Cadastrar",
    component: AtletaCreate,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/atualizar/atleta",
    name: "Atualizar Atleta",
    component: AtletaPut,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/responsavel",
    name: "Dashboard Responsável",
    icon: PeopleIcon,
    component: ResponsavelHome,
    layout: "/admin",
  },
  {
    path: "/atualizar/responsavel",
    name: "Atualizar Responsável",
    component: ResponsavelPut,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/funcionario",
    name: "Dashboard Funcionário",
    icon: "content_paste",
    component: FuncionarioHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/funcionario",
    name: "Funcionário Cadastrar",
    component: FuncionarioCreate,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/atualizar/funcionario",
    name: "Atualizar Funcionário",
    component: FuncionarioPut,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/cargo",
    name: "Dashboard Cargo",
    icon: AssignmentIndIcon,
    component: CargoHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/cargo",
    name: "Dashboard Cargo",
    icon: AssignmentIndIcon,
    component: CargoCreate,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/atualizar/cargo",
    name: "Atualizar Cargo",
    component: CargoPut,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/turma",
    name: "Dashboard Turma",
    icon: SupervisedUserCircleIcon,
    component: TurmaHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/turma",
    name: "Dashboard Turma",
    icon: SupervisedUserCircleIcon,
    component: TurmaCreate,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/categoria",
    name: "Dashboard Categoria",
    icon: CategoryIcon,
    component: CategoriaHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/categoria",
    name: "Categoria Cadastrar",
    icon: CategoryIcon,
    component: CategoriaCreate,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/clube",
    name: "Dashboard Clube Futebol",
    icon: SportsSoccerIcon,
    component: ClubeHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/clube",
    name: "Dashboard Clube Futebol",
    icon: SportsSoccerIcon,
    component: ClubeCreate,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/franquia",
    name: "Dashboard Franquia",
    icon: BusinessIcon,
    component: FranquiaHome,
    layout: "/admin",
  },
  {
    path: "/cadastrar/franquia",
    name: "Dashboard Franquia",
    icon: BusinessIcon,
    component: FranquiaCreate,
    layout: "/admin",
    invisible: true,
  },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
