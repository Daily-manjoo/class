import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공했습니다!",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      content: "비밀번호가 틀렸습니다!",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공 버튼</button>
      <button onClick={onClickError}>실패 버튼</button>
    </>
  );
}
