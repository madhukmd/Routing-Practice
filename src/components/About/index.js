import './index.css'

const About = () => {
  const about = 'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'

  return (
    <div className="about-container">
      <img src={about} alt="about" className="about-img" />
      <h1 className="about-heading">About</h1>
      <p className="about-paragraph">
        I love to create! I am a front-end web developer
      </p>
    </div>
  )
}
export default About
