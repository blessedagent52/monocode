import { describe, expect, it } from "vitest";
import { RUNTIME_MODE_HINT, runtimeModeHint } from "./session";

describe("runtimeModeHint", () => {
  it("names OpenCode auto-accept for OpenCode's Auto mode", () => {
    expect(runtimeModeHint("auto", "opencode")).toContain("OpenCode auto-accept");
  });

  it("keeps the shared hints elsewhere", () => {
    expect(runtimeModeHint("auto", "codex")).toBe(RUNTIME_MODE_HINT.auto);
    expect(runtimeModeHint("auto")).toBe(RUNTIME_MODE_HINT.auto);
    expect(runtimeModeHint("supervised", "opencode")).toBe(
      RUNTIME_MODE_HINT.supervised,
    );
  });
});
