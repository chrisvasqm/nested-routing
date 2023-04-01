import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  return <div>EditPost: {id}</div>;
}

export default EditPost;
