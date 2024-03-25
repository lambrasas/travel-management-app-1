import { Routes, Route } from "react-router-dom";
import { routes } from "./consts";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Layout, Component }) => {
        // if we are not using Layout for every route
        // const element = Layout ? (
        // <Layout>
        //   <Component />
        // </Layout>
        // ) : (
        //   <Component />
        // );
        return (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
