import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Form } from "antd";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";

type QuestionPropType = {
  id: string;
};
export default function Question(props: QuestionPropType) {
  return (
    <div>
      <Head>
        <title>question</title>
      </Head>
      <Form>
        <Form.Item>
          <QuestionInput
            {...{
              title: "test",
              placeholder: "test",
            }}
          ></QuestionInput>
        </Form.Item>
        <Form.Item>
          <QuestionRadio
            {...{
              title: "性别",
              isVertical: false,
              options: [
                { value: "男", text: "男" },
                { value: "女", text: "女" },
              ],
              value: "",
            }}
          ></QuestionRadio>
        </Form.Item>
      </Form>
    </div>
  );
}
