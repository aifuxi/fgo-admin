import gfm from "@bytemd/plugin-gfm";
import breaks from "@bytemd/plugin-breaks";
import highlight from "@bytemd/plugin-highlight";
import { Editor } from "@bytemd/react";
import { withField } from "@douyinfe/semi-ui-19";

const plugins = [gfm(), breaks(), highlight()];

interface BytemdFieldProps {
  field: string;
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: unknown;
}

function BytemdFieldInner(props: BytemdFieldProps) {
  const { value, onChange, field, ...rest } = props;

  return (
    <Editor
      value={value ?? ""}
      plugins={plugins}
      onChange={onChange}
      {...rest}
    />
  );
}

const BytemdFieldComponent = withField(BytemdFieldInner);

export default function BytemdField(props: BytemdFieldProps) {
  return <BytemdFieldComponent {...props} />;
}
