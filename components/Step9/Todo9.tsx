type Props = {
  todo: string;
};
const Todo9 = (props: Props) => {
  return <div className="list-item">{props.todo}</div>;
};

export default Todo9;
