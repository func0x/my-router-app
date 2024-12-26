import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/tasks"
          activeProps={{
            className: "font-bold",
          }}
        >
          Tasks
        </Link>
        <Link
          to="/epics"
          activeProps={{
            className: "font-bold",
          }}
        >
          Epics
        </Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
