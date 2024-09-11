import { Grid, Container } from "@mui/material";
import ProjectCard from "./ProjectCard.jsx";

const cardsData = [
  {
    title: "Discuss The Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.! Consequatur necessitatibus qui asperiores eos ipsum odio excepturi quaerat sunt. Necessitatibus molestiae minima at deleniti quod blanditiis! Aliquam voluptate minima deserunt minus, possimus iure quisquam sunt explicabo unde illo animi, voluptas tenetur necessitatibus corrupti blanditiis labore nobis. Suscipit velit quia omnis ullam inventore architecto iste. Eaque perspiciatis blanditiis, nihil recusandae voluptates id.",
    buttonText: "CLICK TO VIEW MORE",
    number: "1",
  },
  {
    title: "Working on The Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.! Consequatur necessitatibus qui asperiores eos ipsum odio excepturi quaerat sunt. Necessitatibus molestiae minima at deleniti quod blanditiis! Aliquam voluptate minima deserunt minus, possimus iure quisquam sunt explicabo unde illo animi, voluptas tenetur necessitatibus corrupti blanditiis labore nobis. Suscipit velit quia omnis ullam inventore architecto iste. Eaque perspiciatis blanditiis, nihil recusandae voluptates id.",
    buttonText: "CLICK TO VIEW MORE",
    number: "2",
  },
  {
    title: "Revision, Correction & Delivery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.! Consequatur necessitatibus qui asperiores eos ipsum odio excepturi quaerat sunt. Necessitatibus molestiae minima at deleniti quod blanditiis! Aliquam voluptate minima deserunt minus, possimus iure quisquam sunt explicabo unde illo animi, voluptas tenetur necessitatibus corrupti blanditiis labore nobis. Suscipit velit quia omnis ullam inventore architecto iste. Eaque perspiciatis blanditiis, nihil recusandae voluptates id.",
    buttonText: "CLICK TO VIEW MORE",
    number: "3",
  },
];

const CardsGrid = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              number={card.number}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
