import React from "react";
import { axiosRes } from "../../utils/helper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FooterForm } from "../../styles/FooterCss";
import { TextInput, TextInputWrapper, InputErrors } from "../../styles/FormCSS";
import { CustomButton } from "../../styles/GlobalCss";
import { SubscribeValidationSchema } from "../../utils/helper";

const SubscriberForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SubscribeValidationSchema),
  });

  const mailingList = async (data) => {
    const payload = {
      subscriber_email_address: data.mailingAddress,
    };

    console.log("form info", payload);

    axiosRes.post("/mailing-list/subscribers", payload).then((response) => {
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
    <FooterForm onSubmit={handleSubmit(mailingList)}>
      <TextInputWrapper flexDirection="column">
        <TextInput
          className={`${errors.mailingAddress ? "invalid" : ""}`}
          name="subcriberMail"
          placeholder="Email Address"
          marginLeft="0"
          {...register("mailingAddress")}
        />
        {errors.mailingAddress && (
          <InputErrors>{errors.mailingAddress.message}</InputErrors>
        )}
      </TextInputWrapper>
      <TextInputWrapper>
        <CustomButton
          textTransform="uppercase"
          background="var(--theme-color)"
          border="1px solid var(--theme-color)"
          fontSize="12px"
          lineHeight="24px"
          color="var(--white)"
        >
          Submit
        </CustomButton>
      </TextInputWrapper>
    </FooterForm>
  );
};

export default SubscriberForm;
