import { React } from "react";

import { Route, Redirect } from "react-router-dom";

import { DefaultLayout } from "../../layout/Default.Layout";
import { authContext } from "../../page/entry/context";

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <authContext.Consumer>
      {(context) => {
        return (
          <>
            <Route
              {...rest}
              render={() =>
                context.isAuth ? (
                  <DefaultLayout>{children}</DefaultLayout>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          </>
        );
      }}
    </authContext.Consumer>
  );
};
