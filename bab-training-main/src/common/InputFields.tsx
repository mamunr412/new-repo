import { Form, Col, Input } from 'antd';

let children: any = [];

export const getFields = ({ array}: any) => {
    for (let i = 0; i < array.length; i++) {
        children.push(
            <Col span={8} key={i}>
                <Form.Item
                    name={`${array[i].name}`}
                    label={`${array[i].label}`}
                    rules={[
                        {
                            required: true,
                            message: `${array[i].message}`,
                        },
                    ]}
                >
                    <Input placeholder={`${array[i].placeholder}`} />
                </Form.Item>
            </Col>,
        );
    }
    return children;
};

