import React from 'react'
import styled from "styled-components";
import {counts} from "../utils/data.js";
import CountsCard from "../components/cards/CountsCard.jsx"
import WeeklyStatCard from "../components/cards/WeeklyStatCard.jsx"
import CategoryChart from "../components/cards/CategoryChart.jsx";
const Container = styled.div`
flex:1;
height: 100%;
display: flex ;
justify-content: center;
padding: 22px 0px;
overflow-y: scroll;

`

const Wrapper = styled.div`
flex:1;
max-width: 1400px;
display:flex;
flex-direction:column;
gap: 22px;
@media(max-width:600px){
gap: 12px;
}
`;
const Title = styled.div`
font-size: 22px;
color:${({theme})=>theme.text_primary}
font-weight: 500;
`;
const FlexWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 22px;
padding : 0px 16px;
@media(max-width:600px){
gap:12px;}`;


const Dashboard = () => {
  const data = {
  totalCaloriesBurnt: 13500,
  totalWorkouts: 6,
  avgCaloriesBurntPerWorkout: 2250,
  totalWeeksCaloriesBurnt: {
    weeks: ["17th", "18th", "19th", "20th"],
    caloriesBurned: [10500, 0, 0, 0],
  },
  pieChartData: [
    {
      id: 0,
      value: 6000,
      label: "Legs",
    },
    {
      id: 1,
      value: 1500,
      label: "Back",
    },
    {
      id: 2,
      value: 3750,
      label: "Shoulder",
    },
    {
      id: 3,
      value: 2250,
      label: "ABS",
    },
  ],
};
  return (
   <Container>
      <Wrapper>
         <Title>DashBoard</Title>
         <FlexWrap>
            {counts.map((item)=>{
              return  <CountsCard item= {item} data={data}/>
            })}
            
           
         </FlexWrap>
          <FlexWrap>
            <WeeklyStatCard data ={data}/>
            < CategoryChart data ={data}/>
            
           
         </FlexWrap>
      </Wrapper>
   </Container>
  )
}

export default Dashboard
