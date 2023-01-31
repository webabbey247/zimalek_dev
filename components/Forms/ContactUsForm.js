import React, {useState} from "react";
import { axiosRes } from "../../utils/helper";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactValidationSchema } from "../../utils/helper";
import { toast } from "react-toastify";
import {
  AuthForm,
  TextInput,
  TextArea,
  InputErrors,
} from "../../styles/FormCSS";
import {
  Content2Column2,
  ContentFullColumn,
  ContentRow,
  CustomButton,
  CustomDiv,
  GeneralSmText,
} from "../../styles/GlobalCss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactUsForm = () => {
  const [mobile, setMobile] = useState("");
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactValidationSchema),
  });

  const contactUs = async (data) => {
    const payload = {
      customer_full_name: data.fullName,
      customer_email_address: data.emailAddress,
      customer_mobile_number:  mobile ? mobile : data.mobileNumber,
      customer_company_name: data.companyName,
      customer_company_web_url: data.companyWebUrl,
      customer_enquiries: data.enquiry,
    };

    console.log("form info", payload);

    axiosRes.post("/enquiries/contact-us", payload).then((response) => {
      if (response.data.success) {
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        toast.warning(response.data.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        console.log("Warning", response.data.message);
      }
    });
    reset();
  };

  return (
    <>
      <AuthForm padding="1rem 0" onSubmit={handleSubmit(contactUs)}>
        <ContentRow>
        <ContentFullColumn>
            <TextInput
              className={`${errors.fullName ? "invalid" : ""}`}
              name="fullName"
              width="100%"
              placeholder="Full Name"
              {...register("fullName")}
            />
              {errors.fullName && (
            <InputErrors>{errors.fullName.message}</InputErrors>
          )}
          </ContentFullColumn>
          
          <Content2Column2>
            <TextInput
              className={`${errors.emailAddress ? "invalid" : ""}`}
              name="emailAddress"
              width="100%"
              placeholder="Email Address"
              {...register("emailAddress")}
            />
              {errors.emailAddress && (
            <InputErrors>{errors.emailAddress.message}</InputErrors>
          )}
          </Content2Column2>

          <Content2Column2>
          <Controller
            name="mobileNumber"
            {...register("mobileNumber", {
              onChange: (e) => {
                setMobile(e.target.value);
              },
            })}
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                international
                countryCallingCodeEditable={false}
                defaultCountry="NG"
                placeholder="Enter phone number"
              />
            )}
          />
          {errors.mobileNumber && (
            <InputErrors>{errors.mobileNumber.message}</InputErrors>
          )}
        </Content2Column2>

          {/* <Content2Column2>
            <TextInput
              className={`${errors.mobileNumber ? "invalid" : ""}`}
              name="mobileNumber"
              width="100%"
              placeholder="Phone Number"
              {...register("mobileNumber")}
            />
              {errors.mobileNumber && (
            <InputErrors>{errors.mobileNumber.message}</InputErrors>
          )}
          </Content2Column2> */}

          <Content2Column2>
            <TextInput
              className={`${errors.companyName ? "invalid" : ""}`}
              name="companyName"
              width="100%"
              placeholder="Company Name"
              {...register("companyName")}
            />
          </Content2Column2>

          <Content2Column2>
            <TextInput
              className={`${errors.companyWebUrl ? "invalid" : ""}`}
              name="companyWebUrl"
              width="100%"
              placeholder="Company URL (If Any)"
              {...register("companyWebUrl")}
            />
          </Content2Column2>

          <ContentFullColumn>
            <TextArea
              name="enquiry"
              className={`${errors.enquiry ? "invalid" : ""}`}
              {...register("enquiry")}
            />
              {errors.enquiry && (
            <InputErrors>{errors.enquiry.message}</InputErrors>
          )}
          </ContentFullColumn>

          <ContentFullColumn>
            <CustomButton
              type="submit"
              background="#f71735 "
              border="1px solid #f71735 "
              height="52px"
              margin="10px 0 0 0"
              fontWeight="600"
              color="#FAFAFA"
            >
              Submit Ticket
            </CustomButton>
          </ContentFullColumn>

          <ContentFullColumn>
            <GeneralSmText
              textAlign="left"
              color="#83858c"
              fontSize="12px"
              lineHeight="25px"
              fontWeight="400"
              spacing="0.3px"
              width="100%"
              textTransform="unset"
              margin="3rem 0 0"
            >
              Zimalek needs the contact information you provide to us to contact
              you about our products and services. You may unsubscribe from
              these communications at any time. For information on how to
              unsubscribe, as well as our privacy practices and commitment to
              protecting your privacy, please review our Privacy Policy.
            </GeneralSmText>
          </ContentFullColumn>
        </ContentRow>
      </AuthForm>
    </>
  );
};

export default ContactUsForm;
