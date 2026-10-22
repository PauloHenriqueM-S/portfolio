export function ProjectsVisual() {
  return (
    <>
      <div className="group relative flex flex-col items-center justify-between border rounded-2xl w-80 h-96 overflow-hidden transition-all bg-foreground duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50">

        <div className="w-full h-64 overflow-hidden flex items-center justify-center p-4">
          <img
            src="https://imgs.search.brave.com/sbJQ3_0waPkdt_eCh9eXhcQXbN1f6DLzRxhGCqZtSeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/NjAyOTg0OC92ZWN0/b3IvcHJvamVjdC1t/YW5hZ2VtZW50LXRv/b2xzLWJsdWUtZ3Jh/ZGllbnQtY29uY2Vw/dC1pY29uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1CdEl3/VXd1bHotWUdvdUho/QWNaQjV1X2ZRQ3B1/ZGdld2s4ZFVVRThF/cjRFPQ"
            alt="project"
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="w-full p-5 bg-linear-to-t bg-background to-transparent">
          <p className="text-center text-xl font-bold tracking-wide">
            Project Title
          </p>

          <p className="text-center text-sm mt-1">
            Web Development
          </p>
        </div>

      </div>
    </>
  )
}

