import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
const img = require("./img/dashboard.png");
export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>
      <img src={img} alt={img.name} />
    </CardContent>
  </Card>
);
