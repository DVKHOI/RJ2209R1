import React from "react";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
const ToKhaiYTe = () => {
  const handleSubmitForm = (values, actions) => {
    alert("Success");
    setTimeout(() => {
      actions.resetForm({
        username: "",
        email: "",
        phone: "",
        message: "",
      });
      actions.setSubmitting(false);
    }, 5000);
  };
  return (
    <Formik
      initialValues={{
        username: "",
        sohochieu: "",
        namsinh: "",
        gioitinh: "",
        message: "",
        quoctinh: "",
        congty: "",
        bophan: "",
        thebaohiem: "",
        tinh: "",
        quanhuyen: "",
        phuongxa: "",
        sonha: "",
        dienthoai: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string()
          .email("Please enter in valid email")
          .required("Required"),
        gioitinh: Yup.string().required("Required"),
        sohochieu: Yup.number().required("Required"),
        namsinh: Yup.number().required("Required"),
        quoctinh: Yup.string().required("Required"),
        tinh: Yup.string().required("Required"),
        quanhuyen: Yup.string().required("Required"),
        phuongxa: Yup.string().required("Required"),
        sonha: Yup.string().required("Required"),
        dienthoai: Yup.number().required("Required"),
      })}
      onSubmit={handleSubmitForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-[500px] mx-auto p-5" autoComplete="off">
          <h1>Tờ khai y tế</h1>
          <MyInput
            label="Họ tên"
            name="username"
            placeholder="Họ tên"
            id="username"
          ></MyInput>
          <MyInput
            label="Số hộ chiếu/ CMND"
            name="sohochieu"
            placeholder=" Số hộ chiếu/ CMND"
            type="text"
            id="sohochieu"
          ></MyInput>
          <MyInput
            label="Năm sinh"
            name="namsinh"
            placeholder="Năm sinh"
            type="number"
            id="namsinh"
          ></MyInput>
          <MyRadio
            label="Giới tính"
            name="gioitinh"
            title1="Nam"
            title2="Nữ"
          ></MyRadio>
          <MyInput
            label="Quốc tịch"
            name="quoctinh"
            placeholder="Quốc tịch"
            id="quoctinh"
          ></MyInput>
          <MyInput
            label="Công ty làm việc"
            name="congty"
            placeholder="Công ty làm việc"
            id="congty"
          ></MyInput>
          <MyInput
            label="Bộ phận làm việc"
            name="bophan"
            placeholder="Bộ phận làm việc"
            id="bophan"
          ></MyInput>
          <MyCheckbox name="thebaohiem">
            <p>Có thẻ bảo hiểm y tế</p>
          </MyCheckbox>
          <h1>Địa chỉ liên lạc tại Việt Nam</h1>
          <MyInput
            label="Tỉnh thành"
            name="tinh"
            placeholder="Tỉnh thành"
            id="tinh"
          ></MyInput>
          <MyInput
            label="Quận/Huyện"
            name="quanhuyen"
            placeholder="Quận/Huyện"
            id="quanhuyen"
          ></MyInput>
          <MyInput
            label="Phường/Xã"
            name="phuongxa"
            placeholder="Phường/Xã"
            id="phuongxa"
          ></MyInput>
          <MyInput
            label="Số nhà, phố, tổ dân phố /thôn /độ"
            name="sonha"
            placeholder="Số nhà, phố, tổ dân phố /thôn /độ"
            id="sonha"
          ></MyInput>
          <MyInput
            label="Điện thoại"
            name="dienthoai"
            placeholder="Điện thoại"
            id="dienthoai"
            type="number"
          ></MyInput>
          <MyInput
            label="Email"
            name="email"
            placeholder="Email"
            id="email"
            type="email"
          ></MyInput>
          <h2>
            Trong vòng 14 ngày qua, Anh/Chị có đi đến quốc gia/vùng lãnh thổ
            nào.(Có thể đi qua nhiều quốc gia)
          </h2>
          <MyTextarea name="message"></MyTextarea>
          <h2>Trong vòng 14 ngày qua, Anh/Chị có thấy dấu hiệu nào sau đây:</h2>
          <MyCheckbox name="sot">
            <p>Sốt</p>
          </MyCheckbox>
          <MyCheckbox name="ho">
            <p>Ho</p>
          </MyCheckbox>
          <MyCheckbox name="khotho">
            <p>Khó thở</p>
          </MyCheckbox>
          <MyCheckbox name="viemphoi">
            <p>Viêm phổi</p>
          </MyCheckbox>
          <MyCheckbox name="dauhong">
            <p>Đau họng</p>
          </MyCheckbox>
          <MyCheckbox name="metmoi">
            <p>Mệt mỏi</p>
          </MyCheckbox>
          <h2>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với những ai</h2>
          <MyTextarea name="message"></MyTextarea>
          <h2>Trong vòng 14 ngày qua, Anh/Chị có thấy dấu hiệu nào sau đây:</h2>
          <MyCheckbox name="a">
            <p>Người mắc bệnh hoặc nghi ngờ mắc bệnh COVID-19</p>
          </MyCheckbox>
          <MyCheckbox name="b">
            <p>Người từ nước có bệnh COVID-19</p>
          </MyCheckbox>
          <MyCheckbox name="c">
            <p>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</p>
          </MyCheckbox>
          <div>
            <button
              disabled={isSubmitting}
              className="w-full max-w-[500px] text-white bg-purple-500 p-3 rounded-md mt-5"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="p-2 border border-gray-200 w-full max-w-[300px]"
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 ">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyRadio = ({ title1, title2, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="flex flex-row gap-2 mt-2">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input
          className="p-2 border border-gray-200"
          type="radio"
          {...field}
          {...props}
        />
        <label for="title1">{title1}</label>
        <input
          className="p-2 border border-gray-200"
          type="radio"
          {...field}
          {...props}
        />
        <label for="title2">{title2}</label>
      </div>
      {meta.touched && meta.error ? (
        <div className="mb-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="textarea"
        className="p-2 border border-gray-200 w-full max-w-[400px] h-[100px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-input">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600 ">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default ToKhaiYTe;
