import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                backgroundImg="/images/model-s.jpg"
                title="Model S"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                hasDownArrow={true}
                bottomButtons={true}
            />
            <Section
                backgroundImg="/images/model-y.jpg"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                hasDownArrow={true}
            />
            <Section
                backgroundImg="/images/model-x.jpg"
                title="Model X"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                hasDownArrow={true}
            />
            <Section
                backgroundImg="/images/model-3.jpg"
                title="Model 3"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                hasDownArrow={true}
            />
            <Section
                backgroundImg="/images/solar-panel.jpg"
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                backgroundImg="/images/solar-roof.jpg"
                title="Solar Roof"
                description="Empower Your Home with a New Kind of Solar Roof"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`

