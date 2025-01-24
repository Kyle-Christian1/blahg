import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogItem from "./components/BlogItem";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/api/submit', formData);
      setResponse(res.data); // Assuming your backend sends a JSON response
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <div className="App">
      <Header />
      <div id="main-grid">
        <div class="left-side">
          <div class="left-side-inner">
            <div id="main-flexbox">
              <h1>
                <span class="blah">Blah</span>g
              </h1>
              <h2>
                <span class="cheese">a blog for</span> you and your{" "}
                <span class="cheese">complaints!</span>
              </h2>
              <div class="textarea-grid">
                <div></div>
                <form action="/submit" method="post" onSubmit={handleSubmit}>
                  <textarea
                    resize="none"
                    onChange={handleChange}
                    name="complaint-area"
                    class="blog-text-area"
                    rows="7"
                    columns="10"
                    autocapitalize="characters"
                  ></textarea>
                  <button id="complain-btn" type="submit">
                    😠
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side">
          <div class="right-side-inner">
            <h2 id="past-complaints">
              <span class="cheese">Past complaints 👇</span>
            </h2>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;