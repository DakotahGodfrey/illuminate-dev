import styled from 'styled-components';

const HomeWrapper = styled.main`
  background-color: #333;
  min-height: calc(100vh - 10rem);
  display: flex;
  padding: 4rem;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  h1,
  .cta {
    font-size: 3.6rem;
    padding: 1rem 0 1rem 2rem;
    font-weight: 900;
    border-radius: 50px;
    background-color: #333;
    color: #fff;
    margin-bottom: 2rem;
  }
  p {
    font-size: 2.4rem;
    margin: 2rem;
  }
  .card {
    background-color: hsl(0, 0%, 100%);
    backdrop-filter: blur(2px);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 2rem;
  }
  .card-marketing {
    max-width: 80rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;
const MarketingCard = () => {
  return (
    <section className='card card-marketing'>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        architecto animi, quae incidunt totam molestiae delectus veniam, odio
        ipsum doloremque sint facilis quas reprehenderit eius! Mollitia
        cupiditate quos iusto nulla illum officia repellat, ratione velit.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        architecto animi, quae incidunt totam molestiae delectus veniam, odio
        ipsum doloremque sint facilis quas reprehenderit eius! Mollitia
        cupiditate quos iusto nulla illum officia repellat, ratione velit.
      </p>
    </section>
  );
};
const Home = () => {
  return (
    <HomeWrapper>
      <MarketingCard />
    </HomeWrapper>
  );
};

export default Home;
