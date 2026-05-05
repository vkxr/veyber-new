"use client";

import dynamic from "next/dynamic";

const PromoPopup = dynamic(() => import("@/components/PromoPopup"), { ssr: false });
const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"), { ssr: false });

/**
 * Client-only shell that lazy-loads PromoPopup and FloatingButtons.
 * Using dynamic() with ssr:false ensures:
 *   1. Their JS is excluded from the initial bundle (reduces unused JS ~25 KiB)
 *   2. PromoPopup image is never in the server-rendered HTML (prevents it from being LCP)
 *   3. FloatingButtons scroll listener doesn't run during SSR
 */
import { usePathname } from "next/navigation";

export default function ClientShell() {
  const pathname = usePathname();
  const hidePopups = pathname?.startsWith("/review") || pathname?.startsWith("/admin");

  return (
    <>
      {!hidePopups && <PromoPopup />}
      {!hidePopups && <FloatingButtons />}
    </>
  );
}
