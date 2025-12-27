import { createBlog, type BlogCreateReq } from "@/api/blog";
import type { SemiFormApi } from "@/types/semi";
import { Button, Form } from "@douyinfe/semi-ui-19";
import { useRef } from "react";
import { CategoryField } from "./category-field";
import { TagField } from "./tag-field";
import { useRequest } from "ahooks";
import { showSuccessToast } from "@/libs/toast";
import NiceModal from "@ebay/nice-modal-react";
import BlogCreatedModal from "./blog-created-modal";

export default function BlogCreateForm() {
  const formRef = useRef<SemiFormApi<BlogCreateReq>>(null);

  const { loading, run } = useRequest(createBlog, {
    manual: true,
    onSuccess() {
      showSuccessToast("创建成功");
      NiceModal.show(BlogCreatedModal, {
        onOK: () => {
          formRef.current?.reset();
        },
      });
    },
  });

  return (
    <Form<BlogCreateReq>
      getFormApi={(formApi) => (formRef.current = formApi)}
      layout="vertical"
      disabled={loading}
      className="w-full"
      onSubmit={(values) => {
        run(values);
      }}
      initValues={{
        title: "",
        slug: "",
        description: "",
        content: "",
        published: true,
      }}
    >
      <Form.Input
        field="title"
        label="标题"
        size="large"
        showClear
        placeholder="请输入标题"
        rules={[{ required: true, message: "请输入标题" }]}
        extraText="这将是它在站点上显示的标题"
      ></Form.Input>
      <Form.Input
        field="slug"
        label="别名"
        size="large"
        showClear
        prefix="https://fuxiaochen.com/blog/"
        placeholder="请输入别名"
        rules={[{ required: true, message: "请输入别名" }]}
        extraText="「别名」是在 URL 中使用的别称，仅支持小写字母、数字和短横线(-)"
      ></Form.Input>
      <Form.TextArea
        field="description"
        label="描述"
        showClear
        placeholder="请输入描述"
        rules={[{ required: true, message: "请输入描述" }]}
      ></Form.TextArea>
      <CategoryField
        field="categoryID"
        label="分类"
        placeholder="请选择博客分类"
        showClear
      />
      <TagField
        field="tagIDs"
        multiple
        label="标签"
        placeholder="请选择博客标签"
        showClear
      />
      <Form.Switch
        field="published"
        label="是否发布"
        size="large"
        rules={[{ required: true, message: "请输入别名" }]}
      ></Form.Switch>

      <Form.TextArea
        field="content"
        label="内容"
        showClear
        placeholder="请输入内容"
        rules={[{ required: true, message: "请输入内容" }]}
      ></Form.TextArea>

      <Form.Slot noLabel>
        <Button
          block
          type="primary"
          htmlType="submit"
          size="large"
          loading={loading}
        >
          创建
        </Button>
      </Form.Slot>
    </Form>
  );
}
