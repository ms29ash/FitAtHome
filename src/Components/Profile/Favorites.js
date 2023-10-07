import React from 'react'
import tw from 'tailwind-styled-components'
import Favorite from './Favorite'


function Favorites() {

    let item = {
        description: "Fire up your tastebuds with this spicy, succulent harissa chicken. Paired with aromatic Moroccan-style couscous, it s a super-satisfying classic to enjoy all year round.",
        image: "https://blogscdn.thehut.net/app/uploads/sites/478/2021/12/Harissa-Chicken-HERO_1640345749-1008x672.jpeg",
        name: " Harissa Chicken & Moroccan Couscous",
        price: 229,
        ratings: 3.9,
        type: "Non-Veg",
        _id: "621e58775b7e90e4525f07ba"
    }
    return (
        <Container>
            <Favorite foodItem={item} />
            <Favorite foodItem={item} />
            <Favorite foodItem={item} />
            <Favorite foodItem={item} />
            <Favorite foodItem={item} />

        </Container>
    )
}

export default Favorites

const Container = tw.div`
flex w-full flex-wrap
`