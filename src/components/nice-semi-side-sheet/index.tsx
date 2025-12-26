import { SideSheet } from "@douyinfe/semi-ui-19";
import type { NiceModalHandler } from "@ebay/nice-modal-react";

interface Props extends React.ComponentProps<typeof SideSheet> {
  modal: NiceModalHandler;
}

export default function NiceSemiSideSheet(props: Props) {
  const { modal, onCancel, children, ...rest } = props;
  return (
    <SideSheet
      {...rest}
      visible={modal.visible}
      onCancel={(e) => {
        onCancel?.(e);
        modal.hide();
      }}
    >
      {children}
    </SideSheet>
  );
}
