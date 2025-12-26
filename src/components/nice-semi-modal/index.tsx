import { Modal } from "@douyinfe/semi-ui-19";
import type { NiceModalHandler } from "@ebay/nice-modal-react";

interface Props extends React.ComponentProps<typeof Modal> {
  modal: NiceModalHandler;
}

export default function NiceSemiModal(props: Props) {
  const { modal, onCancel, onOk, afterClose, children, ...rest } = props;
  return (
    <Modal
      {...rest}
      visible={modal.visible}
      onOk={(e) => {
        onOk?.(e);
        modal.hide();
      }}
      onCancel={(e) => {
        onCancel?.(e);
        modal.hide();
      }}
      onAfterClose={() => {
        afterClose?.();
        modal.remove();
      }}
    >
      {children}
    </Modal>
  );
}
