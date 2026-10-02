"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container, ctaClass } from "@/components/ui/primitives";

const RETRY_KEY = "chunk-reload-at";

// stale chunks (an open tab during a new deploy, a flaky network) throw ChunkLoadError;
// one silent reload pulls the fresh build. the timestamp guard stops a reload loop.
function isChunkError(e: Error) {
  return /ChunkLoadError|Loading chunk|Failed to load chunk|importing a module script failed|dynamically imported module/i.test(
    `${e?.name} ${e?.message}`
  );
}

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    if (!isChunkError(error)) return;
    const last = Number(sessionStorage.getItem(RETRY_KEY) || 0);
    if (Date.now() - last > 10000) {
      sessionStorage.setItem(RETRY_KEY, String(Date.now()));
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center pt-32 pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="font-mono text-sm text-ember">lỗi</div>
            <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] font-semibold leading-[1.04] tracking-tight text-bone sm:text-5xl">
              Trang gặp lỗi.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-bone-dim">
              Thử lại. Nếu vẫn lỗi, dùng email ở chân trang.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={reset} className={ctaClass}>
                Thử lại
              </button>
              <Link
                href="/"
                className="px-1 py-3 font-mono text-sm text-muted transition-colors hover:text-bone"
              >
                Về trang chủ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
