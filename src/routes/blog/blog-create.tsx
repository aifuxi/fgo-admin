import ContentLayout from "@/components/content-layout";
import { ROUTES } from "@/constants/route";

export default function BlogCreate() {
  return (
    <ContentLayout
      title="新建博客"
      routes={[
        {
          href: ROUTES.Home.href,
          name: ROUTES.Home.name,
        },
        {
          href: ROUTES.BlogList.href,
          name: ROUTES.BlogList.name,
        },
        {
          href: ROUTES.BlogCreate.href,
          name: ROUTES.BlogCreate.name,
        },
      ]}
    >
      新建博客
    </ContentLayout>
  );
}
