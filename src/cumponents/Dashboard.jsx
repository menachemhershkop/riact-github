import Timer from "./Timer";


export default function Dashboard(props) {
  return (
    <div className='dasboard'>
      <section>
        <img src={props.logo} alt="" />
        <p>{props.head}</p>
      </section>
      <h1>{props.content}</h1>
    </div>
  )
}
