import assert from "node:assert/strict";
import test from "node:test";

import {
  GET_TOKEN_BASE_URL_OPTIONS,
  GET_TOKEN_MODELS,
  PRESETS,
} from "./presets.ts";

test("Get Token preset is ready for API-key-only onboarding", () => {
  const preset = PRESETS.find((item) => item.id === "get-token");

  assert.ok(preset);
  assert.equal(preset.baseUrl, "https://api.clawto.link");
  assert.equal(preset.protocol, "responses");
  assert.equal(preset.model, "grok-4.5");
  assert.deepEqual(preset.modelList, ["grok-4.5", "gpt-5.5"]);
});

test("Get Token exposes only the built-in base URLs and one Grok model", () => {
  assert.deepEqual(
    GET_TOKEN_BASE_URL_OPTIONS.map((option) => option.value),
    ["https://api.clawto.link", "https://api.gettoken.dev"],
  );
  assert.deepEqual(
    GET_TOKEN_MODELS.filter((model) => model.value.startsWith("grok-")),
    [{ value: "grok-4.5", label: "Grok-4.5" }],
  );
});
