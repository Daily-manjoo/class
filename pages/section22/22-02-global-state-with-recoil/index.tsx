import { useEffect } from "react";
import { isEditState } from "../../../src/commons/stores";
import BoardWrite from "../../../src/component/units/22-global-state/BoardWrite.presenter.";
import { useRecoilState } from "recoil";

export default function GlobalStateWithRecoilPage(): JSX.Element {
  const [isEdit, SetIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    SetIsEdit(false);
  }, []);

  return <BoardWrite />;
}
