import { Slideshow } from "../components"

export const Home = () => {
  return (
    <>
      <div className="container">
        <Slideshow controls={true} speed={'1000'} />
      </div>
    </>
  )
}