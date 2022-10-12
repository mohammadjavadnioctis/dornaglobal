import React, { FC, memo } from "react";
import { Formik, Form } from "formik";
import FormikControl from "~/lib/form/FormikControl";
import * as Yup from "yup";
import { isDev } from "~/utils/helpers";
import { Button, createStyles } from "@mantine/core";
import UiLink from "~/lib/UiLink";
import { useAuth } from "~/contexts/AuthContext";
import { useRouter } from "next/router";

interface SignInFormType {
  wraperClassname?: string;
}

const useStyles = createStyles((theme) => ({
  root: {
    borderColor: "#E9C46A",
    color: "#E9C46A !important",
    "&:hover": {
      background: "#E9C46A",
      borderColor: "#E9C46A",
      color: "white",
    },
    transition: "all 0.1s linear ",
  },
  inner: {
    color: "#E9C46A",
    "&:hover": {
      color: "white",
    },
  },
}));

const SignInForm: FC<SignInFormType> = memo((props) => {
  const { wraperClassname } = props;
  const { classes } = useStyles();
  const { signIn } = useAuth();
  const router = useRouter();
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string(),
    // modeOfContact: Yup.string().required("Required"),
    // phone: Yup.string().when("modeOfContact", {
    //   is: "telephonemoc",
    //   then: Yup.string().required("Required"),
    // }),
  });

  const onSubmit = async (values: any) => {
    try {
      await signIn(values.email, values.password);
      router.push("/");
    } catch (error) {
    }
  };

  // TODO: change the styling model
  let inputClassName =
    "h-10 bg-gray-200 rounded-lg outline-none focus-visible:ring-1 ring-gray-400 transition-all duration-400";
  let inputLabelClassName = "";
  let inputWrapperCalssName = " flex flex-col mb-5";
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className={`${wraperClassname}`}>
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  inputLabel="Email"
                  inputName="email"
                  fieldClassName={inputClassName}
                  labelClassName={inputLabelClassName}
                  wrapperClassName={inputWrapperCalssName}
                />
                <span className="block mb-5">or</span>
                <FormikControl
                  control="input"
                  type="text"
                  inputLabel="Phone number"
                  inputName="phone"
                  fieldClassName={inputClassName}
                  labelClassName={inputLabelClassName}
                  wrapperClassName={inputWrapperCalssName}
                />
                <FormikControl
                  control="input"
                  type="password"
                  inputLabel="Password"
                  inputName="password"
                  fieldClassName={inputClassName}
                  labelClassName={inputLabelClassName}
                  wrapperClassName={inputWrapperCalssName}
                />

                <UiLink href="/signup">
                  <span className="block mb-4 text-blue-400">
                    Don't have an account ? Register
                  </span>
                </UiLink>

                <Button
                  type="submit"
                  size="xl"
                  variant="outline"
                  disabled={!formik.isValid}
                  classNames={{ inner: classes.inner, root: classes.root }}
                >
                  Sign In
                </Button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
});

if (isDev) {
  SignInForm.displayName = "SignInForm";
}

export default SignInForm;
