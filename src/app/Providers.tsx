"use client";
import { ProvidersRedux } from "@/redux/providers";

function Providers({ children }: { children: React.ReactNode }) {
  return <ProvidersRedux>{children}</ProvidersRedux>;
}

export default Providers;
