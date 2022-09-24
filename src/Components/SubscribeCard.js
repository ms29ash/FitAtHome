import React from "react";
import tw from "tailwind-styled-components";

function SubscribeCard(props) {
  const { img, title } = props;
  return (
    <Container>
      <Img src={img} />
      <Details>
        <Main>
          <Head>{title}</Head>
          <Button>Subscribe</Button>
        </Main>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          labore maiores architecto repudiandae ea nesciunt sunt reiciendis sit
          nihil quibusdam molestiae, repellendus eaque fugiat blanditiis.
          Dolorem, vitae! Dolores consequatur, eos asperiores libero ab
          consectetur inventore dolorem, assumenda iusto maiores cumque tempore
          voluptatum pariatur rem.
        </Description>
      </Details>
    </Container>
  );
}

export default SubscribeCard;

const Container = tw.div`bg-white mx-4 flex flex-col rounded-xl overflow-hidden shadow-xl mb-5 h-[95%] w-full max-w-[400px] `;
const Img = tw.img`object-cover w-full aspect-[5/4]`;

const Details = tw.div`p-5 bg-white rounded-xl -mt-20 `;
const Main = tw.div`flex items-center justify-between mb-5 px-2`;
const Button = tw.button` text-sm font-bold text-white bg-redfood px-3 py-2 rounded-full hover:bg-orangefood`;
const Head = tw.h1``;
const Description = tw.p``;
