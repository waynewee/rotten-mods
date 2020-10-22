
import { Modal, Button, Form, Input, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';



interface SignupModalProps {
    toggles :{
        toggleSignupModal : () => void;
        switchModals: () => void;
    }
}

const SignupModal: React.FC<SignupModalProps> = (toggles) => {


    const onFormFinish = () => {
        // do something when the form has been finished.
    }

    return (
        <>

            <Modal
                visible={true}
                title={
                    <div style={{ textAlign: "center" }}> SIGNUP </div>
                }
                centered
                onCancel={toggles.toggles.toggleSignupModal}
                footer={null}>
                <Form
                    name="normal_signup"
                    className="signup-form"
                    initialValues={{}}
                    onFinish={onFormFinish}>
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please enter your full name!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="emailaddress"
                        rules={[{ required: true, message: 'Please enter an email address!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />} placeholder="Email Address" />
                    </Form.Item>

                    <Form.Item
                        name="emailaddress"
                        rules={[{ required: true, message: 'Please enter an email address!' }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter a password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item
                            name="yearofstudy"
                            rules={[{ required: true, message: 'Please enter your Year of Study!' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input prefix={<LockOutlined />} placeholder="Year Of Study" />
                        </Form.Item>
                        <Form.Item
                            name="university"
                            rules={[{ required: true, message: 'Please enter your University!' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input placeholder="University" />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={styles.loginFormButton}>SIGN UP</Button>
                    </Form.Item>




                </Form>
                <Divider />
                <div style={{ textAlign: "center" }}>
                    Already have an account? Log in <a onClick={() => toggles.toggles.switchModals()}> here</a>
                </div>

            </Modal>
        </>
    );


};

const styles = {
    loginFormButton: {
        width: "100%",
        backgroundColor: "#2D538C",
    }
}


export default SignupModal;