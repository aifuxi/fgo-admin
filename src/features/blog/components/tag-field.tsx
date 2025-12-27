import { Form } from "@douyinfe/semi-ui-19";
import { useMount, useRequest } from "ahooks";
import { getTagList } from "@/api/tag";
import { useState } from "react";

interface OptionItemType {
  value: string;
  label: string;
}

type TagFieldProps = Omit<
  React.ComponentProps<typeof Form.Select>,
  "optionList" | "loading"
>;

export function TagField(props: TagFieldProps) {
  const [list, setList] = useState<OptionItemType[]>([]);

  const { loading, run } = useRequest(
    (v: string) =>
      getTagList({
        page: 1,
        pageSize: 100,
        name: v,
      }),
    {
      manual: true,
      debounceWait: 500,
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
      className="w-full"
      filter
      remote
      onSearch={handleSearch}
      optionList={list}
      loading={loading}
      emptyContent={null}
      {...props}
    ></Form.Select>
  );
}
