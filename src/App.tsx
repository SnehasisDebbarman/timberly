/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react'
import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import chairSvg from "./assets/chair_svg.svg";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

{
  /* <div className='w-screen h-screen p-20 overflow-hidden overflow-y-hidden bg-white'>
      <h1 className='text-[64px] text-[#595959] josefin-slab-500'>TIMBERLY</h1>
      <h5 className='text-[16px] w-1/2 habibi-regular'>Browse our wide variety of modern furniture ? timber to create your ideal living place</h5>
      <div className='flex gap-10 py-12'>

        <div className='flex flex-col items-center justify-center w-1'>
          <div className='w-[4px] flex-1 bg-[#8F8F8F] rounded-2xl' />
          <div className='my-5'>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
          <div className='w-[4px] flex-1 bg-[#8F8F8F] rounded-2xl' />
        </div>
        <div className=' w-[45vw]'>

          <div className='flex flex-col w-full gap-4 px-16 py-4'>


            <h3 className='mb-5 text-5xl josefin-slab-500'>Login</h3>

            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                const errors: any = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                  setSubmitting(false);
                }, 400);
                if (values.email === "timberly@gmail.com" && values.password === "12345678") {
                  navigate("dashboard");
                }
                else {
                  alert("Wrong Email/password");
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Input className='w-full p-6 rounded-xl drop-shadow-2xl'
                    type="email "
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} />


                  {errors.email && touched.email && errors.email}
                  <Input className='w-full p-6 mt-5 rounded-xl drop-shadow-2xl'
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} />

                  <div>
                    {errors.password && touched.password && errors.password || ""}
                  </div>
                  <Button className='mt-5 text-[25px] p-6 max-w-min josefin-slab-500 bg-[#0F172A]' type="submit" disabled={isSubmitting}>Sign in</Button>

                </form>
              )}
            </Formik>




          </div>

          <div className='flex justify-around flex-1 p-10 px-20 '>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='josefin-slab-700 text-[32px] text-[#595959]'>100+</h3>
              <p className='josefin-slab-600 text-[#595959]'>Total Products</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='josefin-slab-700 text-[32px] text-[#595959]'>100+</h3>
              <p className='josefin-slab-600 text-[#595959]'>Total Products</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='josefin-slab-700 text-[32px] text-[#595959]'>100+</h3>
              <p className='josefin-slab-600 text-[#595959]'>Total Products</p>
            </div>
          </div>

        </div>


        <img src={chairSvg} alt="" className='w-auto h-auto overflow-y-hidden drop-shadow-2xl ' />



      </div>



    </div> */
  // biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
}

function App() {
  const navigate = useNavigate();
  return (
    <div className="grid w-screen h-screen overflow-hidden overflow-y-hidden bg-white place-items-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-[64px] text-[#595959] josefin-slab-500">
              TIMBERLY
            </h1>
            <h5 className="text-[16px] habibi-regular">
              Browse our wide variety of modern furniture ? timber to create
              your ideal living place
            </h5>

            <h3 className="my-5 text-5xl josefin-slab-500">Login</h3>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                }, 400);
                if (
                  values.email === "timberly@gmail.com" &&
                  values.password === "12345678"
                ) {
                  navigate("dashboard");
                } else {
                  alert("Wrong Email/password");
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    className="w-full p-6 md:w-1/2 rounded-xl drop-shadow-2xl"
                    type="email "
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  {errors.email && touched.email && errors.email}
                  <Input
                    className="w-full p-6 mt-5 md:w-1/2 rounded-xl drop-shadow-2xl"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  <div>
                    {(errors.password && touched.password && errors.password) ||
                      ""}
                  </div>
                  <div>
                    <Button
                      className="mt-5 text-[25px] p-6 max-w-min josefin-slab-500 bg-[#0F172A]"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
            <img
              src={chairSvg}
              alt=""
              className="w-auto h-auto overflow-y-hidden md:hidden drop-shadow-2xl "
            />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={chairSvg}
              alt=""
              className="w-auto h-auto overflow-y-hidden drop-shadow-2xl "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
