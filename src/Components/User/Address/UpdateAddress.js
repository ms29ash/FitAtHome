import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import tw from "tailwind-styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateAddress } from "../../../features/basket/listSlice";

function UpdateAddress({ open, onOpenModal, onCloseModal, item }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: item,
  });

  const dispatch = useDispatch();

  const closeHandler = () => {
    reset(item);
    onCloseModal();
  };

  const updateAddressHandler = (data) => {
    const updatedItem = {};

    for (const key in data) {
      if (data.hasOwnProperty(key) && item[key] !== data[key]) {
        updatedItem[key] = data[key];
      }
    }
    // eslint-disable-next-line eqeqeq
    if (Object.keys(updatedItem).length === 0) {
    } else {
      dispatch(updateAddress({ address: item._id, updatedItem }));
    }
    closeHandler();
  };

  return (
    <Modal
      open={open}
      onClose={closeHandler}
      center
      closeOnOverlayClick={false}
    >
      <Container>
        <Head>Update Address</Head>

        <Form onSubmit={handleSubmit(updateAddressHandler)}>
          <div className="space-y-12">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Label htmlFor="country" className="">
                  Country
                </Label>
                <Wrapper>
                  <select
                    id="country"
                    {...register("country")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </Wrapper>
              </div>

              <div className="col-span-full">
                <Label htmlFor="title">Title</Label>
                <Wrapper>
                  <Input
                    type="text"
                    {...register("title")}
                    id="title"
                    autoComplete="title"
                  />
                </Wrapper>
              </div>
              <div className="col-span-full">
                <Label htmlFor="street-address">Street address</Label>
                <Wrapper>
                  <Input
                    type="text"
                    {...register("street")}
                    id="street-address"
                    autoComplete="street-address"
                  />
                </Wrapper>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Label htmlFor="city">City</Label>
                <Wrapper>
                  <Input
                    type="text"
                    {...register("city")}
                    id="city"
                    autoComplete="address-level2"
                  />
                </Wrapper>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="region">State / Province</Label>
                <Wrapper>
                  <Input
                    type="text"
                    {...register("state")}
                    id="region"
                    autoComplete="address-level1"
                  />
                </Wrapper>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="postal-code">ZIP / Postal code</Label>
                <Wrapper>
                  <Input
                    type="text"
                    {...register("postalCode")}
                    id="postal-code"
                    autoComplete="postal-code"
                  />
                </Wrapper>
              </div>
            </div>
          </div>

          <Btns>
            <CancleBtn onClick={closeHandler} type="button">
              Cancel
            </CancleBtn>
            <SubBtn type="submit">Save</SubBtn>
          </Btns>
        </Form>
      </Container>
    </Modal>
  );
}

export default UpdateAddress;

const Head = tw.h1`py-5 text-2xl `;

const Container = tw.div`rounded-lg `;
const Form = tw.form`  `;
const Wrapper = tw.div` mt-2 `;
const Label = tw.label`block text-sm leading-6 text-gray-900 font-bold`;
const Input = tw.input`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2`;

const Btns = tw.div`mt-6 flex items-center justify-end gap-x-6`;
const SubBtn = tw.button`rounded-md bg-ssorange px-3 py-2 text-sm font-semibold text-white shadow-sm`;
const CancleBtn = tw.button`text-sm font-semibold leading-6 text-gray-900`;
