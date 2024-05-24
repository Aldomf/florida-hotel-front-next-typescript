"use client";
import { ProvidersRedux } from "@/redux/providers";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProvidersRedux>
      <div className="jost">{children}</div>
    </ProvidersRedux>
  );
}

export default Providers;
