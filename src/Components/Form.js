import tw from 'tailwind-styled-components';


const Container = tw.div`py-24 w-screen h-screen  grid place-items-center`;
const Wrapper = tw.div`bg-white w-[95vw]  max-w-[500px] shadow-xl rounded-lg  mx-auto px-8 py-12 `;
const Head = tw.h1`text-center text-redfood`;
const Form = tw.form`bg-white`;
const Label = tw.label`ml-3 text-redfood font-bold`;
const Input = tw.input`w-full py-2 px-3  border-b-2 !outline-none border-black`;
const Error = tw.div`h-5 text-redfood text-xs ml-2`;
const Text = tw.p`mt-5 text-sm text-center`;
const Button = tw.button`!bg-redfood text-center w-full px-5 py-2 text-white rounded-full hover:!bg-orangefood cursor-pointer font-bold mt-4`;

export { Container, Button, Wrapper, Head, Form, Label, Input, Error, Text }