import styled from 'styled-components';
import { useState } from 'react';
const CreateRepoWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
  .repo-modal {
    padding: 3rem;
    background-color: #fff;
    border-radius: 20px;
    button {
      font-size: 2.4rem;
      padding: 1rem 3rem;
      border-radius: 2rem;
      background-color: rebeccapurple;
      color: #fff;
    }
    h2 {
      margin-bottom: 1.6rem;
      font-size: 3.6rem;
    }
    form {
      min-width: 50rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      .form-field {
        width: 100%;
        margin-bottom: 2.4rem;
      }
      label {
        font-size: 2.4rem;
      }
      input,
      textarea {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1.6rem;
        border-radius: 2rem;
        border: 1px solid #c3c3c3;
      }
    }
  }
`;

interface CreateRepoModalProps {
  setShowForm: (value: boolean) => void;
}

const CreateRepoModal: React.FC<CreateRepoModalProps> = ({ setShowForm }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowForm(false);
    console.log({ title, description });
  };

  return (
    <CreateRepoWrapper>
      <div className='repo-modal'>
        <h2>Create New Repo</h2>
        <form>
          <div className='form-field'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div className='form-field'>
            <label htmlFor='description'>description</label>
            <textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
          <button onClick={(e) => handleSubmit(e)}>Create</button>
        </form>
      </div>
    </CreateRepoWrapper>
  );
};

export default CreateRepoModal;
