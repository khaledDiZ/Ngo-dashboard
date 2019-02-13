import React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./users";
// import { PostList, PostEdit, PostCreate } from "./posts";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@material-ui/icons/Group";
import "./App";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    {/* <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    /> */}
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);
export default App;
