export default function Card({ title, text }) {
  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}
