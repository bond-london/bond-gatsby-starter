import { useFirstVisibleCallback } from "@bond-london/gatsby-graphcms-components";

export function useFirstVisible(): [() => void, string] {
  return useFirstVisibleCallback("animation-paused", "animation-running");
}
