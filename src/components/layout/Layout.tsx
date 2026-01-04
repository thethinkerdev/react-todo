import { Provider } from "react-redux";
import store from "../../store";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
