import Meta from "../components/meta"

export default function Layout(props) {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
          {props.children}
        </main>
      </div>
    </>
  )
}
