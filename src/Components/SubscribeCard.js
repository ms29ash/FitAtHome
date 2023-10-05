import React from "react";
import tw from "tailwind-styled-components";

function SubscribeCard(props) {
  const { img, title, price, months, popular } = props;
  return (
    <Container>
      <Img src={img} />
      <Details>
        <Main>
          <Head>{title} {popular === true ? <Small  >Most Popular</Small> : ""} </Head>
          {/* <Button>Subscribe</Button> */}
          <SubHead>

            <Price>&#8377;{price} <del className="text-xs font-normal" >&#8377;{price * 2 + 1}</del></Price>
            <p className="text-xs " >For {months} months</p>
          </SubHead>
        </Main>
        <Description>
          <Li>
            Lorem ipsum dolor, sit amet consectetur adipisicing eLit. Debitis
          </Li>
          <Li>
            nihil quibusdam molestiae, repellendus eaque fugiat
          </Li>
          <Li>
            labore maiores architecto repudiandae ea nesciunt sunt reiciendis sit
          </Li>
          <Li>
            Dolorem, vitae! Dolores consequatur, eos asperiores Libero ab
            consectetur inventore
          </Li>
          <Button>Subscribe</Button>
        </Description>
      </Details>
    </Container>
  );
}

export default SubscribeCard;

const Container = tw.div`bg-white mx-4 flex flex-col rounded-xl overflow-hidden shadow-xl mb-5 h-[95%] w-full max-w-[400px] `;
const Img = tw.img`object-cover w-full aspect-[5/4]`;

const Details = tw.div`px-5 pt-5 bg-white rounded-xl -mt-20 `;
const Main = tw.div`flex items-center justify-between  px-2`;
const Price = tw.p`  font-bold text-black  rounded-full `;
const Button = tw.button` text-base font-bold w-full my-5 text-ssorange hover:text-white px-3 py-3 rounded-lg border-2 border-ssorange hover:bg-ssorange transition-all `;
const Head = tw.h1`flex items-center `;
const Small = tw.small`text-xs font-normal text-redfood ml-2 border-[1px] py-[3px] px-1 border-redfood`
const SubHead = tw.div`flex-col items-end flex`
const Description = tw.ul`list-disc text-xs p-4`;
const Li = tw.li`leading-6 text-slate-600 mt-1`
