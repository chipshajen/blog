

export default function Button({onClick, text}) {
  return (
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
  )
}
