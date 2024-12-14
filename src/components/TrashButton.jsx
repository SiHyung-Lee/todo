import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TrashButton() {
  return (
    <button className="p-2 bg-red-100 hover:bg-red-200 rounded">
      <FontAwesomeIcon icon="fa-regular fa-trash-can" className="text-red-500" />
      삭제
    </button>
  );
}

export default TrashButton;