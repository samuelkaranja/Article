import "./style.css";

const EditForm = () => {
  return (
    <div className="editform">
      <form>
        <label>Article Title</label>
        <input type="text" />
        <label>Description</label>
        <textarea rows={5}></textarea>
      </form>
    </div>
  );
};

export default EditForm;
