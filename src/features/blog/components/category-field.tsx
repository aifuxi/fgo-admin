import { debounce } from "es-toolkit";
import { Form } from "@douyinfe/semi-ui-19";
import { useMount, useRequest } from "ahooks";
import { getCategoryList } from "@/api/category";
import { useState } from "react";

interface OptionItemType {
  value: string;
  label: string;
}

type CategoryFieldProps = Omit<
  React.ComponentProps<typeof Form.Select>,
  "optionList" | "loading"
>;

export function CategoryField(props: CategoryFieldProps) {
  const [list, setList] = useState<OptionItemType[]>([]);

  const { loading, run } = useRequest(
    (v: string) =>
      getCategoryList({
        page: 1,
        pageSize: 100,
        name: v,
      }),
    {
      manual: true,
      onSuccess(resp) {
        if (resp?.data?.lists) {
          setList(
            resp.data.lists.map(
              (el): OptionItemType => ({ label: el.name, value: el.id })
            )
          );
        } else {
          setList([]);
        }
      },
    }
  );

  useMount(() => {
    run("");
  });

  const handleSearch = (inputValue: string) => {
    run(inputValue);
  };

  return (
    <Form.Select
      size="large"
      placeholder="请选择博客分类"
      className="w-full"
      filter
      remote
      onSearch={debounce(handleSearch, 1000)}
      optionList={list}
      loading={loading}
      emptyContent={null}
      {...props}
    ></Form.Select>
  );
}
