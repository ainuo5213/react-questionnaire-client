import { Typography, Input } from "antd";
type QuestionInputPropType = {
  title: string;
  placeholder?: string;
};

const { Paragraph } = Typography;
export default function QuestionInput(props: QuestionInputPropType) {
  return (
    <div>
      <Paragraph strong>{props.title}</Paragraph>
      <Input placeholder={props.placeholder}></Input>
    </div>
  );
}
