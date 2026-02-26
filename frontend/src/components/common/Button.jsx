export default function Button({ children }) {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
      {children}
    </button>
  )
}
