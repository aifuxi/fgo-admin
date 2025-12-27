import ContentLayout from "@/components/content-layout";
import { ROUTES } from "@/constants/route";

export default function BlogList() {
  return (
    <ContentLayout
      title="博客列表"
      routes={[
        {
          href: ROUTES.Home.href,
          name: ROUTES.Home.name,
        },
        {
          href: ROUTES.BlogList.href,
          name: ROUTES.BlogList.name,
        },
      ]}
    >
      博客列表内容
    </ContentLayout>
  );
}
