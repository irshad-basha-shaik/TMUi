import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
{
    path: "/project_details",
    title: "Project Details",
    rtlTitle: "تفاصيل المشروع",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/select_documents_rules",
    title: "Select documents & Rules",
    rtlTitle: "حدد المستندات والقواعد",
    icon: "icon-upload",
    class: ""
  },
  {
    path: "/generate_concept_seeds",
    title: "Generate Concept Seeds",
    rtlTitle: "توليد مفهوم البذور",
    icon: "icon-pin",
    class: "" },
  {
    path: "/generate_thesaurus",
    title: "Generate Thesaurus",
    rtlTitle: "توليد قاموس المرادفات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/generate_results",
    title: "Generate Results",
    rtlTitle: "توليد النتائج",
    icon: "icon-single-02",
    class: ""
  }/**,
  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "توليد النتائج",
    icon: "icon-single-02",
    class: ""
  }*/
];
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
