import React from "react";
import styled from "styled-components";
import { Formik, Form as FormikForm, Field } from "formik";

import { Input } from "../Input/Input";
import { SelectInput } from "../Input/SelectInput";
import { RadioInputFormik } from "../Input/RadioInputFormik";
import { RadioButtonFormikCash } from "../Input/RadioButtonFormikCash";
import { Summarize } from "../Cart/Summarize";

interface TransactionFormProps {
  setShipping: (value: number) => void;
  shipping: number;
  totalPrice: number;
}

const selectOptions = ["Thailand", "USSA"];
const paymentOptions = ["Cash", "Credit/Debit"];

export const TransactionForm: React.FC<TransactionFormProps> = (props) => {
  const { setShipping, shipping, totalPrice } = props;

  const handleOnSubmit = (values: any, actions: any) => {
    actions.setSubmitting(true);

    alert(JSON.stringify(values));

    actions.setSubmitting(false);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          country: selectOptions[0],
          address: "",
          district: "",
          zone: "",
          province: "",
          code: "",
          phone: "",
          shipping: 0,
          payment: "",
        }}
        onSubmit={handleOnSubmit}
      >
        {(formikProps) => {
          return (
            <FormikForm>
              <Wrapper>
                <div>
                  <Title>
                    <p>ที่อยู่ในการจัดส่ง</p>
                  </Title>
                  <Detail>
                    <Row>
                      <FieldContainer>
                        <label>ชื่อ</label>
                        <Field name="firstName">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                      <FieldContainer>
                        <label>นามสกุล</label>
                        <Field name="lastName">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                    </Row>
                    <Row>
                      <FieldContainer>
                        <label>ประเทศ</label>
                        <Field name="country">
                          {(fieldProps: any) => {
                            return (
                              <SelectInput
                                width="100%"
                                options={selectOptions}
                                {...fieldProps}
                                onChange={(e: any) =>
                                  fieldProps.form.setFieldValue(
                                    fieldProps.field.name,
                                    e.target.value
                                  )
                                }
                              />
                            );
                          }}
                        </Field>
                      </FieldContainer>
                    </Row>
                    <Row>
                      <FieldContainer>
                        <label>
                          ที่อยู่
                          <label style={{ color: "red", marginLeft: "5px" }}>
                            (บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)
                          </label>
                        </label>
                        <Field name="address">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                    </Row>
                    <Row>
                      <FieldContainer>
                        <label>แขวง/ตำบล</label>
                        <Field name="district">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                      <FieldContainer>
                        <label>เขต/อำเภอ</label>
                        <Field name="zone">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                    </Row>
                    <Row>
                      <FieldContainer>
                        <label>จังหวัด</label>
                        <Field name="province">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                      <FieldContainer>
                        <label>รหัสไปรรษณีย์</label>
                        <Field name="code">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                    </Row>
                    <Row>
                      <FieldContainer>
                        <label>
                          เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์
                          เฉพาะตัวเลขเท่านั้น)
                        </label>
                        <Field name="phone">
                          {(fieldProps: any) => {
                            return <Input width="100%" {...fieldProps.field} />;
                          }}
                        </Field>
                      </FieldContainer>
                    </Row>
                  </Detail>
                  <Space />

                  <Title>
                    <p>เลือกขนส่ง</p>
                  </Title>
                  <Row>
                    <RadioInputFormik
                      value="0"
                      label="Free Shippong"
                      name="shipping"
                      onClick={setShipping}
                    />
                  </Row>
                  <Row>
                    <RadioInputFormik
                      value="40"
                      logo="./images/kerry.png"
                      label="kerry"
                      name="shipping"
                      onClick={setShipping}
                    />
                  </Row>

                  <Space />

                  <Title>วิธีชำระเงิน</Title>
                  <Row>
                    <RadioButtonFormikCash
                      name="payment"
                      value={paymentOptions[0]}
                      label={paymentOptions[0]}
                    />
                  </Row>
                  <Row>
                    <RadioButtonFormikCash
                      name="payment"
                      value={paymentOptions[1]}
                      label={paymentOptions[1]}
                    />
                  </Row>
                </div>
                <Summarize
                  totalPrice={totalPrice}
                  shipping={shipping}
                  isSubmit={true}
                  buttonText="ชำระเงิน"
                />
              </Wrapper>
            </FormikForm>
          );
        }}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 10px;
`;

const Title = styled.div`
  border-bottom: 3px solid #c8c8c8;
  padding: 15px 0;

  margin-bottom: 15px;

  > p {
    margin: 0;

    font-weight: bold;
    font-size: 18px;
  }
`;

const Row = styled.div`
  display: flex;

  margin-bottom: 10px;

  > * + * {
    margin-left: 20px;
  }
`;

const FieldContainer = styled.div`
  width: 100%;

  > * + * {
    margin-top: 10px;
  }
`;

const Space = styled.div`
  margin-bottom: 50px; ;
`;

const Detail = styled.div`
  width: 80%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;

  > div:nth-child(1) {
    flex-grow: 10;
  }

  > div:nth-child(2) {
    margin-left: 30px;
  }

  @media (max-width: 1500px) {
    flex-direction: column;

    > div:nth-child(2) {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  @media (max-width: 800px) {
    > div:nth-child(2) {
      width: 100%;
    }
  }
`;
