import Example from "../../../src/component/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>+++++빨간색 파란색 초록색+++++</div>
      <Example school="다람쥐초등학교">
        <div>
          <input type="text" />
          <div>짱구</div>
          <button>클릭해주세요.</button>
        </div>
      </Example>
      <div>+++++빨간색 파란색 초록색+++++</div>
    </div>
  );
}
