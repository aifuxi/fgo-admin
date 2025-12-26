import NiceModal from "@ebay/nice-modal-react";
import NiceSemiModal from "@/components/nice-semi-modal";

import { showSuccessToast } from "@/libs/toast";
import { setToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/route";

const LogoutConfirmModal = NiceModal.create(() => {
  const modal = NiceModal.useModal();
  const navigate = useNavigate();

  return (
    <NiceSemiModal
      modal={modal}
      title="退出登录"
      centered
      onOk={() => {
        setToken("");
        showSuccessToast("退出登录成功");
        navigate(ROUTES.Login.href, { replace: true });
      }}
    >
      你确定要退出登录吗？
    </NiceSemiModal>
  );
});

export default LogoutConfirmModal;
