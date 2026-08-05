export function TaskForm({ handleSubmit, title, desc, setTitle, setDesc }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>create task</h1>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" id="" value={desc}onChange={(e)=>{setDesc(e.target.value)}} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
