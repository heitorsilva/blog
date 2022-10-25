import type { MetaFunction } from "@remix-run/node";

import Admin from "~/components/shared/Admin";

export const meta: MetaFunction = () => ({
  title: "Admin - Heitor Silva | Blog",
});

export default function Index() {
  return (
    <Admin>
      Conteúdo
    </Admin>
  );
}
