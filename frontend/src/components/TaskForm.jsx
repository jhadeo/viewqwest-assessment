export function TaskForm({ handleSubmit, title, desc, setTitle, setDesc }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>create task</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id=""
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
