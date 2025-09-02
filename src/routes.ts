import { lazy } from "solid-js";

const modules = import.meta.glob("./pages/**/*.tsx");

// Convert the file paths into routes
export const routes = Object.entries(modules).map(([file, loader]) => {
  // e.g. "./pages/index.tsx" -> "/"
  let path = file
    .replace("./pages", "")
    .replace("/index.tsx", "")
    .replace(".tsx", "");

  if (path === "") path = "/";

  // Wrap the async import in lazy()
  const component = lazy(() => (loader as () => Promise<{ default: any }>)());

  return { path, component };
});
