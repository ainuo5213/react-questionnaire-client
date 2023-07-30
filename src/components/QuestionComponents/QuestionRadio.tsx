import React from "react";
import { Radio, Space, Typography } from "antd";

type QuestionRadioPropType = {
  value: string;
  text: string;
};

type QustionRadioPropType = {
  title?: string;
  isVertical?: boolean;
  options: QuestionRadioPropType[];
  value?: string;
};

const { Paragraph } = Typography;
export default function QuestionRadio(props: QustionRadioPropType) {
  const { title, options, isVertical } = {
    ...props,
  };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {options!.map((r, i) => {
            if (!r.text) {
              return null;
            }
            return (
              <Radio key={i} value={r.value}>
                {r.text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
}
