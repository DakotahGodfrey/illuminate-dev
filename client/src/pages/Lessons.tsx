import styled from 'styled-components';
import { Link } from 'react-router-dom';
const LessonsWrapper = styled.main`
  padding: 3rem;
  min-height: calc(100vh - 10rem);
  background-color: #636161;
  h2 {
    margin-bottom: 2.4rem;
    padding-left: 2rem;
    font-size: 3.6rem;
    color: #fff;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 3rem;
    justify-items: center;
    grid-auto-flow: column;
  }
  .lesson {
    font-size: 2rem;
    max-width: 55ch;
    h3 {
      background-color: #fff;
      color: black;
      padding: 0.5rem 2rem;
      border-radius: 50px;
      margin-bottom: 1.6rem;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      color: #fff;
      margin-left: 1.6rem;
    }
  }
`;
interface LessonItemProps {
  lesson: {
    id: number;
    title: string;
    body: string;
  };
}
const lessons = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    id: 1,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias atque itaque explicabo magnam dolor temporibus animi quasi ipsum dicta.',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    id: 2,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias atque itaque explicabo magnam dolor temporibus animi quasi ipsum dicta.',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    id: 3,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias atque itaque explicabo magnam dolor temporibus animi quasi ipsum dicta.',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    id: 4,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias atque itaque explicabo magnam dolor temporibus animi quasi ipsum dicta.',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    id: 5,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias atque itaque explicabo magnam dolor temporibus animi quasi ipsum dicta.',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    id: 6,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias atque itaque explicabo magnam dolor temporibus animi quasi ipsum dicta.',
  },
];

const LessonItem: React.FC<LessonItemProps> = ({ lesson }) => {
  return (
    <article className='lesson'>
      <Link to={`lessons/${lesson.id}`}>
        <h3>{lesson.title}</h3>
      </Link>
      <p>{lesson.body}</p>
    </article>
  );
};

const Lessons = () => {
  return (
    <LessonsWrapper>
      <h2>Lorem ipsum dolor sit.</h2>
      <section>
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson} key={lesson.id} />
        ))}
      </section>
    </LessonsWrapper>
  );
};

export default Lessons;
