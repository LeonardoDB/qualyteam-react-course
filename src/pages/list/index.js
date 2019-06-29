import React, { Fragment } from "react";
import { Card } from "../../components/card";

const List = ({ values, props }) => (
  <Fragment>
    {values.map(recipe => <Card key={recipe.id} {...recipe} props />)}
  </Fragment>
);

export { List };
